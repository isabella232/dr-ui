import React from 'react';
import PropTypes from 'prop-types';
import BackToTopButton from '../back-to-top-button/back-to-top-button';
import ErrorBoundary from '../error-boundary/error-boundary';
import Breadcrumb from '../breadcrumb/breadcrumb';
import Content from './components/content';
import Sidebar from './components/sidebar';
import { filterOptions } from './components/example-index';
import { findHasSection, findParentPath, createUniqueCrumbs } from './utils';

// default configuration for each layout
// every option can be overriden in the frontMatter
import layoutConfig from './layout.config.js';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';

export default class PageLayout extends React.Component {
  // render the page's sidebar
  renderSidebar = (config, switchedNavigation, parentPath) => {
    const { constants } = this.props;
    return (
      <div
        className={`flex-child flex-child--no-shrink w-full w180-mm w240-ml mr36-mm ${config.sidebarTheme}`}
      >
        <Sidebar
          {...this.props}
          navigation={switchedNavigation}
          constants={constants}
          parentPath={parentPath}
          layoutConfig={config}
        />
      </div>
    );
  };

  // render the page's content
  renderContent = (config, parentPath, parent, hasSection) => {
    const { constants, frontMatter, location } = this.props;
    // removes "for (Platform)" from section titles to avoid repetition
    const trimSectionTitle = (title) =>
      title.replace(/\sfor\s(iOS|Android|Vision|Unity)/, '');
    const crumbs = createUniqueCrumbs([
      {
        title: 'All docs',
        path: 'https://docs.mapbox.com'
      },
      {
        title: constants.SITE,
        path: `${constants.BASEURL}/`
      },
      // if multi-structured site add the section name
      ...(hasSection
        ? [
            {
              title: trimSectionTitle(hasSection.title),
              path: `${constants.BASEURL}/${hasSection.path}/`
            }
          ]
        : []),
      ...(parent && parent.title
        ? [
            {
              title: parent.title,
              path: parent.parent
            }
          ]
        : []),
      {
        title: frontMatter.title,
        path: location.pathname
      }
    ]);
    return (
      <div className="flex-child flex-child--grow">
        {!frontMatter.hideBreadcrumbs && (
          <Breadcrumb
            themeWrapper="none block-mm py12"
            domain={false}
            location={location}
            links={crumbs}
          />
        )}

        <Content
          {...this.props}
          parentPath={parentPath}
          layoutConfig={config}
        />
      </div>
    );
  };

  render() {
    const { location, navigation, frontMatter } = this.props;

    const { navOrder, noShellHeaderBuffer } = frontMatter;

    // determine's if this is a single or multi-structured site (the latter has sections)
    const hasSection = findHasSection(navigation, location.pathname);
    // get the parent's path, we need this for the top nav
    const parentPath = findParentPath(navigation, location.pathname);
    // if page has `section` then switch to multi-page
    const switchedNavigation = hasSection
      ? navigation[hasSection.path]
      : navigation;

    // set default layout to page
    if (!frontMatter.layout) frontMatter.layout = 'page';

    // if layout is example and has navOrder assume 'exampleIndex' layout
    const config = {
      ...(navOrder && frontMatter.layout === 'example'
        ? layoutConfig.exampleIndex
        : layoutConfig[frontMatter.layout]),
      ...frontMatter
    };

    return (
      <ErrorBoundary>
        {!noShellHeaderBuffer && <div className="shell-header-buffer" />}
        <div className="limiter limiter--wide">
          <div className="flex-parent-mm">
            {!frontMatter.hideSidebar && (
              <ErrorBoundary>
                {this.renderSidebar(config, switchedNavigation, parentPath)}
              </ErrorBoundary>
            )}
            <ErrorBoundary>
              {this.renderContent(
                config,
                parentPath,
                navigation.hierarchy[location.pathname],
                hasSection
              )}
            </ErrorBoundary>
          </div>
        </div>
        <div className="fixed block none-mm mx24 my24 z5 bottom right">
          <BackToTopButton />
        </div>
      </ErrorBoundary>
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
  /** Provided by Batfish, the `pathname` (relative url) of the current page is required */
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  /**
`frontMatter` prop | Description | Conditions
---|---|---
`layout` | One of: `page`, `example`, `full`, `exampleIndex`. |
`navOrder` | If defined with a number, the page will be added to TabList in the navigation bar. This is the canonical way for defining a top-level page. |
`order` | Defined by number, the order that pages should appear in the sidebar's NavigationAccordion |  `page` layout
`hideTitle` | Hide the title of the page. |
`hideFeedback` | Remove the feedback component from the bottom of the page. |
`sidebarTheme` | Mapbox Assembly class names to style the sidebar container. | all layouts except `none`
`hideCardLanguage` | If `true`, hide the language from all Cards. | `exampleIndex` layout
`hideCardDescription` | If `true`, hide the description from all Cards. | `exampleIndex` layout
`fullWidthCards` | Makes CardContainer full width. | `exampleIndex` layout
`showCards` | Enable or disable the `CardsContainer`. This is helpful for pages like the dr-ui Components page. | `exampleIndex` layout
`cardColSize` | A number to define the column sizes for the Cards | `exampleIndex` layout
`unProse` | If `true`, remove the "prose" class from PageLayout. This is helpful for non-content pages. |
`noShellHeaderBuffer` | If `true`, remove the header buffer div. This is helpful for custom headers like on the Help page. |
`hideFromNav` | If `true`, remove an item from appearing in NavigationAccordion. (This is used in API docs.) | 
`hideBreadcrumbs` | If `true`, remove the breadcrumbs. (This is used by Help home page.) |
`hideSidebar` | If `true`, remove the sidebar. (This is used by Help home page.) |
`showFilters` | All filters for an exampleIndex page are shown if the data is available. Use `showFilters` to define only the filters you want the page to display. | `exampleIndex` layout
*/
  frontMatter: PropTypes.shape({
    headings: PropTypes.array, // a set of headings that is automatically generated by Batfish
    navOrder: PropTypes.number,
    order: PropTypes.number,
    layout: PropTypes.oneOf(['page', 'example', 'exampleIndex', 'full']),
    hideTitle: PropTypes.bool,
    hideFeedback: PropTypes.bool,
    sidebarTheme: PropTypes.string,
    showCards: PropTypes.bool,
    fullWidthCards: PropTypes.bool,
    cardColSize: PropTypes.number,
    unProse: PropTypes.bool,
    noShellHeaderBuffer: PropTypes.bool,
    hideFromNav: PropTypes.bool,
    hideCardLanguage: PropTypes.bool,
    hideCardDescription: PropTypes.bool,
    hideBreadcrumbs: PropTypes.bool,
    hideSidebar: PropTypes.bool,
    title: PropTypes.string,
    showFilters: PropTypes.arrayOf(filterOptions)
  }).isRequired,
  /**
- `navTabs` - links to be shown in the `NavigationAccordion`, formatted as an array of object: `[{"href": "/overview", "id": "overview", "label": "Overview"}]`
- `hierarchy` - Object of every path and their parent: `{"/overview/layous": {"parent": "/overview", "title": "Overview"}}`
- `title` - required for multi-structured layouts, this is the title for the `ProductMenu`
- `tag` - optional `tag` name to pass to `ProductMenu`, [see available options](#productmenu).
*/
  navigation: PropTypes.shape({
    navTabs: PropTypes.array,
    hierarchy: PropTypes.object,
    title: PropTypes.string,
    tag: PropTypes.string
  }).isRequired,
  /** An object of filters. This dataset can be generated with [@mapbox/dr-ui/helpers/batfish/filters.js](https://mapbox.github.io/dr-ui/guides/batfish-helpers/#filters).*/
  filters: PropTypes.objectOf(
    PropTypes.shape({
      topics: PropTypes.array,
      pages: PropTypes.array,
      languages: PropTypes.array,
      levels: PropTypes.array,
      videos: PropTypes.bool
    })
  ),
  /**
- `SITE` - the name of the site.
- `BASEURL` - the base url of the website, as used in the batfish.config.js
- `FORWARD_EVENT_WEBHOOK` - an object with to values: `production` and `staging`.
*/
  constants: PropTypes.shape({
    SITE: PropTypes.string.isRequired,
    BASEURL: PropTypes.string.isRequired,
    FORWARD_EVENT_WEBHOOK: PropTypes.shape({
      production: PropTypes.string.isRequired,
      staging: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  /** Required if using the `exampleIndex` layout along with `imageId`s. The value is the local `AppropriateImage` component. */
  AppropriateImage: PropTypes.func,
  /** For when headings are dynamic, this is used by API docs */
  headings: PropTypes.array,
  /** For `Search` component */
  placeholder: PropTypes.string,
  /** For `Search` component */
  connector: PropTypes.instanceOf(SiteSearchAPIConnector),
  /** For `Feedback` component */
  feedbackSentryDsn: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
