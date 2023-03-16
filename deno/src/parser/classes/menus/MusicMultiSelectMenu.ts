import MusicMultiSelectMenuItem from './MusicMultiSelectMenuItem.ts';
import MusicMenuItemDivider from './MusicMenuItemDivider.ts';
import { YTNode } from '../../helpers.ts';
import Text from '../misc/Text.ts';
import Parser from '../../index.ts';
import type { RawNode } from '../../index.ts';
class MusicMultiSelectMenu extends YTNode {
  static type = 'MusicMultiSelectMenu';

  title: string;
  options: Array<MusicMultiSelectMenuItem | MusicMenuItemDivider>;

  constructor(data: RawNode) {
    super();

    this.title = new Text(data.title.musicMenuTitleRenderer?.primaryText).toString();
    this.options = Parser.parseArray(data.options, [ MusicMultiSelectMenuItem, MusicMenuItemDivider ]);
  }
}

export default MusicMultiSelectMenu;