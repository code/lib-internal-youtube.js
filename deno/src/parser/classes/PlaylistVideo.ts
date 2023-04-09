import Text from './misc/Text.ts';
import Parser from '../index.ts';
import Thumbnail from './misc/Thumbnail.ts';
import Author from './misc/Author.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import ThumbnailOverlayTimeStatus from './ThumbnailOverlayTimeStatus.ts';
import Menu from './menus/Menu.ts';

import { YTNode } from '../helpers.ts';

class PlaylistVideo extends YTNode {
  static type = 'PlaylistVideo';

  id: string;
  index: Text;
  title: Text;
  author: Author;
  thumbnails: Thumbnail[];
  thumbnail_overlays;
  set_video_id: string | undefined;
  endpoint: NavigationEndpoint;
  is_playable: boolean;
  menu: Menu | null;
  upcoming;
  video_info: Text;
  accessibility_label?: string;

  duration: {
    text: string;
    seconds: number;
  };

  constructor(data: any) {
    super();
    this.id = data.videoId;
    this.index = new Text(data.index);
    this.title = new Text(data.title);
    this.author = new Author(data.shortBylineText);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
    this.set_video_id = data?.setVideoId;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.is_playable = data.isPlayable;
    this.menu = Parser.parseItem(data.menu, Menu);
    this.video_info = new Text(data.videoInfo);
    this.accessibility_label = data.title.accessibility.accessibilityData.label;

    const upcoming = data.upcomingEventData && Number(`${data.upcomingEventData.startTime}000`);
    if (upcoming) {
      this.upcoming = new Date(upcoming);
    }

    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: parseInt(data.lengthSeconds)
    };
  }

  get is_live(): boolean {
    return this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus)?.style === 'LIVE';
  }

  get is_upcoming(): boolean {
    return this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus)?.style === 'UPCOMING';
  }
}

export default PlaylistVideo;