import Parser from '../index.ts';
import Menu from './menus/Menu.ts';
import Button from './Button.ts';
import WatchNextEndScreen from './WatchNextEndScreen.ts';
import PlayerOverlayAutoplay from './PlayerOverlayAutoplay.ts';
import type DecoratedPlayerBar from './DecoratedPlayerBar.ts';

import { YTNode } from '../helpers.ts';

class PlayerOverlay extends YTNode {
  static type = 'PlayerOverlay';

  end_screen;
  autoplay;
  share_button;
  add_to_menu;
  fullscreen_engagement;
  actions;
  browser_media_session;
  decorated_player_bar;

  constructor(data: any) {
    super();
    this.end_screen = Parser.parseItem<WatchNextEndScreen>(data.endScreen, WatchNextEndScreen);
    this.autoplay = Parser.parseItem<PlayerOverlayAutoplay>(data.autoplay, PlayerOverlayAutoplay);
    this.share_button = Parser.parseItem<Button>(data.shareButton, Button);
    this.add_to_menu = Parser.parseItem<Menu>(data.addToMenu, Menu);
    this.fullscreen_engagement = Parser.parse(data.fullscreenEngagement);
    this.actions = Parser.parseArray(data.actions);
    this.browser_media_session = Parser.parseItem(data.browserMediaSession);
    this.decorated_player_bar = Parser.parseItem<DecoratedPlayerBar>(data.decoratedPlayerBarRenderer);
  }
}

export default PlayerOverlay;