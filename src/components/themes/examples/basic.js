/*
Themes are accessible through other components such as Note and Tag.
*/
import React from 'react';
import Note from '../../note/note';
import Tag from '../../tag/tag';

export default class Basic extends React.Component {
  render() {
    return (
      <div>
        <Note theme="new">New note.</Note>
        <Tag theme="new" />
      </div>
    );
  }
}
