import Text from './misc/Text.ts';
import Parser from '../index.ts';
import Thumbnail from './misc/Thumbnail.ts';
import PlaylistAuthor from './misc/PlaylistAuthor.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import ThumbnailOverlayTimeStatus from './ThumbnailOverlayTimeStatus.ts';
import type Menu from './menus/Menu.ts';

import { YTNode } from '../helpers.ts';

class PlaylistVideo extends YTNode {
  static type = 'PlaylistVideo';

  id: string;
  index: Text;
  title: Text;
  author: PlaylistAuthor;
  thumbnails: Thumbnail[];
  thumbnail_overlays;
  set_video_id: string | undefined;
  endpoint: NavigationEndpoint;
  is_playable: boolean;
  menu: Menu | null;
  upcoming;

  duration: {
    text: string;
    seconds: number;
  };

  constructor(data: any) {
    super();
    this.id = data.videoId;
    this.index = new Text(data.index);
    this.title = new Text(data.title);
    this.author = new PlaylistAuthor(data.shortBylineText);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
    this.set_video_id = data?.setVideoId;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.is_playable = data.isPlayable;
    this.menu = Parser.parseItem<Menu>(data.menu);

    const upcoming = data.upcomingEventData && Number(`${data.upcomingEventData.startTime}000`);
    if (upcoming) {
      this.upcoming = new Date(upcoming);
    }

    this.duration = {
      text: new Text(data.lengthText).text,
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