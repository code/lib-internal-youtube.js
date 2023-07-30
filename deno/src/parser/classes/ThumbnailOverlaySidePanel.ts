import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class ThumbnailOverlaySidePanel extends YTNode {
  static type = 'ThumbnailOverlaySidePanel';

  text: Text;
  icon_type: string;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text);
    this.icon_type = data.icon.iconType;
  }
}