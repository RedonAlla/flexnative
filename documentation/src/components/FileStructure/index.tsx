import React from 'react';
import './styles.scss';


const DEFAULT_ITEM_PADDING_LEFT = 1;
const itemPaddingLeft = (level: number): string => `${DEFAULT_ITEM_PADDING_LEFT * level}rem`;

type FileItemProps = {
  icon: string;
  level: number;
  name: string;
  separator?: boolean;
  right?: React.ReactNode;
}

type FileItemRightProps = {
  text: string;
  icon?: string;
}

export class FileItem extends React.PureComponent<FileItemProps> {
  render() {
    return (
      <div className='file-item' style={{paddingLeft: itemPaddingLeft(this.props.level)}}>
        <span className={this.props.icon} />
        <span className='name'>{this.props.name}</span>
        { this.props.separator && <span className='separator' />}
        { this.props.right }
      </div>
    );
  }
}

export class FileItemRight extends React.PureComponent<FileItemRightProps> {
  render() {
    return (
      <>
        <span>{this.props.text}</span>
        { this.props.icon && <span className={this.props.icon} /> }
      </>
    );
  }
}

export default class FileStructure extends React.PureComponent<React.PropsWithChildren> {
  render() {
    return (
      <div className='language-bash file-structure'>
        { this.props.children }
      </div>
    );
  }
}