// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: youtube/api/pfiinnertube/playback_context.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface PlaybackContext {
  contentPlaybackContext?: PlaybackContext_ContentPlaybackContext | undefined;
}

export interface PlaybackContext_ContentPlaybackContext {
  deviceSignals?: string | undefined;
  revShareClientId?: string | undefined;
  timeSinceLastAdSeconds?: number | undefined;
  lactMilliseconds?: number | undefined;
  autoplaysSinceLastAd?: number | undefined;
  vis?: number | undefined;
  fling?: boolean | undefined;
  splay?: boolean | undefined;
  autoplay?: boolean | undefined;
  timeOfLastInstreamPrerollAd?: number | undefined;
  currentUrl?: string | undefined;
  referer?: string | undefined;
  loadAnnotationsByDemand?: boolean | undefined;
  autoCaptionsDefaultOn?:
    | boolean
    | undefined;
  /** optional ForceAdParameters force_ad_parameters = 25; */
  slicedBread?: boolean | undefined;
  autonav?: boolean | undefined;
  trailer?:
    | boolean
    | undefined;
  /**
   * optional MdxPlaybackContext mdx_context = 31;
   * optional LivePlaybackContext live_context = 32;
   */
  playerWidthPixels?: number | undefined;
  playerHeightPixels?:
    | number
    | undefined;
  /** optional Html5Preference html5_preference = 36; */
  snd?: number | undefined;
  vnd?:
    | number
    | undefined;
  /** optional UnpluggedContentPlaybackContext unplugged_context = 40; */
  uao?: number | undefined;
  mutedAutoplay?:
    | boolean
    | undefined;
  /** optional AutonavSettingsState autonav_state = 45; */
  enablePrivacyFilter?: boolean | undefined;
  isLivingRoomDeeplink?: boolean | undefined;
  signatureTimestamp?:
    | number
    | undefined;
  /** optional TrailerPlaybackContext trailer_context = 49; */
  isInlinePlaybackNoAd?: boolean | undefined;
  isInlineUnmutedPlayback?:
    | boolean
    | undefined;
  /**
   * optional CustomTabContext custom_tab_context = 52;
   * optional VideoPlaybackPosition player_playback_position = 54;
   */
  playPackageVersion?:
    | number
    | undefined;
  /**
   * optional CoWatchPlaybackContext co_watch_context = 56;
   * optional WatchAmbientModePlaybackContext watch_ambient_mode_context = 57;
   * optional CompositeVideoPlaybackContext composite_video_context = 58;
   */
  isSequenceEntry?: boolean | undefined;
}

function createBasePlaybackContext(): PlaybackContext {
  return { contentPlaybackContext: undefined };
}

export const PlaybackContext: MessageFns<PlaybackContext> = {
  encode(message: PlaybackContext, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.contentPlaybackContext !== undefined) {
      PlaybackContext_ContentPlaybackContext.encode(message.contentPlaybackContext, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlaybackContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaybackContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contentPlaybackContext = PlaybackContext_ContentPlaybackContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlaybackContext {
    return {
      contentPlaybackContext: isSet(object.contentPlaybackContext)
        ? PlaybackContext_ContentPlaybackContext.fromJSON(object.contentPlaybackContext)
        : undefined,
    };
  },

  toJSON(message: PlaybackContext): unknown {
    const obj: any = {};
    if (message.contentPlaybackContext !== undefined) {
      obj.contentPlaybackContext = PlaybackContext_ContentPlaybackContext.toJSON(message.contentPlaybackContext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaybackContext>, I>>(base?: I): PlaybackContext {
    return PlaybackContext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlaybackContext>, I>>(object: I): PlaybackContext {
    const message = createBasePlaybackContext();
    message.contentPlaybackContext =
      (object.contentPlaybackContext !== undefined && object.contentPlaybackContext !== null)
        ? PlaybackContext_ContentPlaybackContext.fromPartial(object.contentPlaybackContext)
        : undefined;
    return message;
  },
};

function createBasePlaybackContext_ContentPlaybackContext(): PlaybackContext_ContentPlaybackContext {
  return {
    deviceSignals: undefined,
    revShareClientId: undefined,
    timeSinceLastAdSeconds: undefined,
    lactMilliseconds: undefined,
    autoplaysSinceLastAd: undefined,
    vis: undefined,
    fling: undefined,
    splay: undefined,
    autoplay: undefined,
    timeOfLastInstreamPrerollAd: undefined,
    currentUrl: undefined,
    referer: undefined,
    loadAnnotationsByDemand: undefined,
    autoCaptionsDefaultOn: undefined,
    slicedBread: undefined,
    autonav: undefined,
    trailer: undefined,
    playerWidthPixels: undefined,
    playerHeightPixels: undefined,
    snd: undefined,
    vnd: undefined,
    uao: undefined,
    mutedAutoplay: undefined,
    enablePrivacyFilter: undefined,
    isLivingRoomDeeplink: undefined,
    signatureTimestamp: undefined,
    isInlinePlaybackNoAd: undefined,
    isInlineUnmutedPlayback: undefined,
    playPackageVersion: undefined,
    isSequenceEntry: undefined,
  };
}

export const PlaybackContext_ContentPlaybackContext: MessageFns<PlaybackContext_ContentPlaybackContext> = {
  encode(message: PlaybackContext_ContentPlaybackContext, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.deviceSignals !== undefined) {
      writer.uint32(10).string(message.deviceSignals);
    }
    if (message.revShareClientId !== undefined) {
      writer.uint32(26).string(message.revShareClientId);
    }
    if (message.timeSinceLastAdSeconds !== undefined) {
      writer.uint32(32).uint32(message.timeSinceLastAdSeconds);
    }
    if (message.lactMilliseconds !== undefined) {
      writer.uint32(40).int64(message.lactMilliseconds);
    }
    if (message.autoplaysSinceLastAd !== undefined) {
      writer.uint32(48).uint32(message.autoplaysSinceLastAd);
    }
    if (message.vis !== undefined) {
      writer.uint32(64).uint32(message.vis);
    }
    if (message.fling !== undefined) {
      writer.uint32(72).bool(message.fling);
    }
    if (message.splay !== undefined) {
      writer.uint32(80).bool(message.splay);
    }
    if (message.autoplay !== undefined) {
      writer.uint32(88).bool(message.autoplay);
    }
    if (message.timeOfLastInstreamPrerollAd !== undefined) {
      writer.uint32(104).uint64(message.timeOfLastInstreamPrerollAd);
    }
    if (message.currentUrl !== undefined) {
      writer.uint32(122).string(message.currentUrl);
    }
    if (message.referer !== undefined) {
      writer.uint32(130).string(message.referer);
    }
    if (message.loadAnnotationsByDemand !== undefined) {
      writer.uint32(184).bool(message.loadAnnotationsByDemand);
    }
    if (message.autoCaptionsDefaultOn !== undefined) {
      writer.uint32(192).bool(message.autoCaptionsDefaultOn);
    }
    if (message.slicedBread !== undefined) {
      writer.uint32(216).bool(message.slicedBread);
    }
    if (message.autonav !== undefined) {
      writer.uint32(232).bool(message.autonav);
    }
    if (message.trailer !== undefined) {
      writer.uint32(240).bool(message.trailer);
    }
    if (message.playerWidthPixels !== undefined) {
      writer.uint32(272).int32(message.playerWidthPixels);
    }
    if (message.playerHeightPixels !== undefined) {
      writer.uint32(280).int32(message.playerHeightPixels);
    }
    if (message.snd !== undefined) {
      writer.uint32(296).int32(message.snd);
    }
    if (message.vnd !== undefined) {
      writer.uint32(304).int32(message.vnd);
    }
    if (message.uao !== undefined) {
      writer.uint32(328).int32(message.uao);
    }
    if (message.mutedAutoplay !== undefined) {
      writer.uint32(352).bool(message.mutedAutoplay);
    }
    if (message.enablePrivacyFilter !== undefined) {
      writer.uint32(368).bool(message.enablePrivacyFilter);
    }
    if (message.isLivingRoomDeeplink !== undefined) {
      writer.uint32(376).bool(message.isLivingRoomDeeplink);
    }
    if (message.signatureTimestamp !== undefined) {
      writer.uint32(384).uint32(message.signatureTimestamp);
    }
    if (message.isInlinePlaybackNoAd !== undefined) {
      writer.uint32(400).bool(message.isInlinePlaybackNoAd);
    }
    if (message.isInlineUnmutedPlayback !== undefined) {
      writer.uint32(408).bool(message.isInlineUnmutedPlayback);
    }
    if (message.playPackageVersion !== undefined) {
      writer.uint32(440).int64(message.playPackageVersion);
    }
    if (message.isSequenceEntry !== undefined) {
      writer.uint32(480).bool(message.isSequenceEntry);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlaybackContext_ContentPlaybackContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaybackContext_ContentPlaybackContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceSignals = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.revShareClientId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.timeSinceLastAdSeconds = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lactMilliseconds = longToNumber(reader.int64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.autoplaysSinceLastAd = reader.uint32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.vis = reader.uint32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.fling = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.splay = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.autoplay = reader.bool();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.timeOfLastInstreamPrerollAd = longToNumber(reader.uint64());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.currentUrl = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.referer = reader.string();
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.loadAnnotationsByDemand = reader.bool();
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.autoCaptionsDefaultOn = reader.bool();
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.slicedBread = reader.bool();
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.autonav = reader.bool();
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.trailer = reader.bool();
          continue;
        case 34:
          if (tag !== 272) {
            break;
          }

          message.playerWidthPixels = reader.int32();
          continue;
        case 35:
          if (tag !== 280) {
            break;
          }

          message.playerHeightPixels = reader.int32();
          continue;
        case 37:
          if (tag !== 296) {
            break;
          }

          message.snd = reader.int32();
          continue;
        case 38:
          if (tag !== 304) {
            break;
          }

          message.vnd = reader.int32();
          continue;
        case 41:
          if (tag !== 328) {
            break;
          }

          message.uao = reader.int32();
          continue;
        case 44:
          if (tag !== 352) {
            break;
          }

          message.mutedAutoplay = reader.bool();
          continue;
        case 46:
          if (tag !== 368) {
            break;
          }

          message.enablePrivacyFilter = reader.bool();
          continue;
        case 47:
          if (tag !== 376) {
            break;
          }

          message.isLivingRoomDeeplink = reader.bool();
          continue;
        case 48:
          if (tag !== 384) {
            break;
          }

          message.signatureTimestamp = reader.uint32();
          continue;
        case 50:
          if (tag !== 400) {
            break;
          }

          message.isInlinePlaybackNoAd = reader.bool();
          continue;
        case 51:
          if (tag !== 408) {
            break;
          }

          message.isInlineUnmutedPlayback = reader.bool();
          continue;
        case 55:
          if (tag !== 440) {
            break;
          }

          message.playPackageVersion = longToNumber(reader.int64());
          continue;
        case 60:
          if (tag !== 480) {
            break;
          }

          message.isSequenceEntry = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlaybackContext_ContentPlaybackContext {
    return {
      deviceSignals: isSet(object.deviceSignals) ? globalThis.String(object.deviceSignals) : undefined,
      revShareClientId: isSet(object.revShareClientId) ? globalThis.String(object.revShareClientId) : undefined,
      timeSinceLastAdSeconds: isSet(object.timeSinceLastAdSeconds)
        ? globalThis.Number(object.timeSinceLastAdSeconds)
        : undefined,
      lactMilliseconds: isSet(object.lactMilliseconds) ? globalThis.Number(object.lactMilliseconds) : undefined,
      autoplaysSinceLastAd: isSet(object.autoplaysSinceLastAd)
        ? globalThis.Number(object.autoplaysSinceLastAd)
        : undefined,
      vis: isSet(object.vis) ? globalThis.Number(object.vis) : undefined,
      fling: isSet(object.fling) ? globalThis.Boolean(object.fling) : undefined,
      splay: isSet(object.splay) ? globalThis.Boolean(object.splay) : undefined,
      autoplay: isSet(object.autoplay) ? globalThis.Boolean(object.autoplay) : undefined,
      timeOfLastInstreamPrerollAd: isSet(object.timeOfLastInstreamPrerollAd)
        ? globalThis.Number(object.timeOfLastInstreamPrerollAd)
        : undefined,
      currentUrl: isSet(object.currentUrl) ? globalThis.String(object.currentUrl) : undefined,
      referer: isSet(object.referer) ? globalThis.String(object.referer) : undefined,
      loadAnnotationsByDemand: isSet(object.loadAnnotationsByDemand)
        ? globalThis.Boolean(object.loadAnnotationsByDemand)
        : undefined,
      autoCaptionsDefaultOn: isSet(object.autoCaptionsDefaultOn)
        ? globalThis.Boolean(object.autoCaptionsDefaultOn)
        : undefined,
      slicedBread: isSet(object.slicedBread) ? globalThis.Boolean(object.slicedBread) : undefined,
      autonav: isSet(object.autonav) ? globalThis.Boolean(object.autonav) : undefined,
      trailer: isSet(object.trailer) ? globalThis.Boolean(object.trailer) : undefined,
      playerWidthPixels: isSet(object.playerWidthPixels) ? globalThis.Number(object.playerWidthPixels) : undefined,
      playerHeightPixels: isSet(object.playerHeightPixels) ? globalThis.Number(object.playerHeightPixels) : undefined,
      snd: isSet(object.snd) ? globalThis.Number(object.snd) : undefined,
      vnd: isSet(object.vnd) ? globalThis.Number(object.vnd) : undefined,
      uao: isSet(object.uao) ? globalThis.Number(object.uao) : undefined,
      mutedAutoplay: isSet(object.mutedAutoplay) ? globalThis.Boolean(object.mutedAutoplay) : undefined,
      enablePrivacyFilter: isSet(object.enablePrivacyFilter)
        ? globalThis.Boolean(object.enablePrivacyFilter)
        : undefined,
      isLivingRoomDeeplink: isSet(object.isLivingRoomDeeplink)
        ? globalThis.Boolean(object.isLivingRoomDeeplink)
        : undefined,
      signatureTimestamp: isSet(object.signatureTimestamp) ? globalThis.Number(object.signatureTimestamp) : undefined,
      isInlinePlaybackNoAd: isSet(object.isInlinePlaybackNoAd)
        ? globalThis.Boolean(object.isInlinePlaybackNoAd)
        : undefined,
      isInlineUnmutedPlayback: isSet(object.isInlineUnmutedPlayback)
        ? globalThis.Boolean(object.isInlineUnmutedPlayback)
        : undefined,
      playPackageVersion: isSet(object.playPackageVersion) ? globalThis.Number(object.playPackageVersion) : undefined,
      isSequenceEntry: isSet(object.isSequenceEntry) ? globalThis.Boolean(object.isSequenceEntry) : undefined,
    };
  },

  toJSON(message: PlaybackContext_ContentPlaybackContext): unknown {
    const obj: any = {};
    if (message.deviceSignals !== undefined) {
      obj.deviceSignals = message.deviceSignals;
    }
    if (message.revShareClientId !== undefined) {
      obj.revShareClientId = message.revShareClientId;
    }
    if (message.timeSinceLastAdSeconds !== undefined) {
      obj.timeSinceLastAdSeconds = Math.round(message.timeSinceLastAdSeconds);
    }
    if (message.lactMilliseconds !== undefined) {
      obj.lactMilliseconds = Math.round(message.lactMilliseconds);
    }
    if (message.autoplaysSinceLastAd !== undefined) {
      obj.autoplaysSinceLastAd = Math.round(message.autoplaysSinceLastAd);
    }
    if (message.vis !== undefined) {
      obj.vis = Math.round(message.vis);
    }
    if (message.fling !== undefined) {
      obj.fling = message.fling;
    }
    if (message.splay !== undefined) {
      obj.splay = message.splay;
    }
    if (message.autoplay !== undefined) {
      obj.autoplay = message.autoplay;
    }
    if (message.timeOfLastInstreamPrerollAd !== undefined) {
      obj.timeOfLastInstreamPrerollAd = Math.round(message.timeOfLastInstreamPrerollAd);
    }
    if (message.currentUrl !== undefined) {
      obj.currentUrl = message.currentUrl;
    }
    if (message.referer !== undefined) {
      obj.referer = message.referer;
    }
    if (message.loadAnnotationsByDemand !== undefined) {
      obj.loadAnnotationsByDemand = message.loadAnnotationsByDemand;
    }
    if (message.autoCaptionsDefaultOn !== undefined) {
      obj.autoCaptionsDefaultOn = message.autoCaptionsDefaultOn;
    }
    if (message.slicedBread !== undefined) {
      obj.slicedBread = message.slicedBread;
    }
    if (message.autonav !== undefined) {
      obj.autonav = message.autonav;
    }
    if (message.trailer !== undefined) {
      obj.trailer = message.trailer;
    }
    if (message.playerWidthPixels !== undefined) {
      obj.playerWidthPixels = Math.round(message.playerWidthPixels);
    }
    if (message.playerHeightPixels !== undefined) {
      obj.playerHeightPixels = Math.round(message.playerHeightPixels);
    }
    if (message.snd !== undefined) {
      obj.snd = Math.round(message.snd);
    }
    if (message.vnd !== undefined) {
      obj.vnd = Math.round(message.vnd);
    }
    if (message.uao !== undefined) {
      obj.uao = Math.round(message.uao);
    }
    if (message.mutedAutoplay !== undefined) {
      obj.mutedAutoplay = message.mutedAutoplay;
    }
    if (message.enablePrivacyFilter !== undefined) {
      obj.enablePrivacyFilter = message.enablePrivacyFilter;
    }
    if (message.isLivingRoomDeeplink !== undefined) {
      obj.isLivingRoomDeeplink = message.isLivingRoomDeeplink;
    }
    if (message.signatureTimestamp !== undefined) {
      obj.signatureTimestamp = Math.round(message.signatureTimestamp);
    }
    if (message.isInlinePlaybackNoAd !== undefined) {
      obj.isInlinePlaybackNoAd = message.isInlinePlaybackNoAd;
    }
    if (message.isInlineUnmutedPlayback !== undefined) {
      obj.isInlineUnmutedPlayback = message.isInlineUnmutedPlayback;
    }
    if (message.playPackageVersion !== undefined) {
      obj.playPackageVersion = Math.round(message.playPackageVersion);
    }
    if (message.isSequenceEntry !== undefined) {
      obj.isSequenceEntry = message.isSequenceEntry;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaybackContext_ContentPlaybackContext>, I>>(
    base?: I,
  ): PlaybackContext_ContentPlaybackContext {
    return PlaybackContext_ContentPlaybackContext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlaybackContext_ContentPlaybackContext>, I>>(
    object: I,
  ): PlaybackContext_ContentPlaybackContext {
    const message = createBasePlaybackContext_ContentPlaybackContext();
    message.deviceSignals = object.deviceSignals ?? undefined;
    message.revShareClientId = object.revShareClientId ?? undefined;
    message.timeSinceLastAdSeconds = object.timeSinceLastAdSeconds ?? undefined;
    message.lactMilliseconds = object.lactMilliseconds ?? undefined;
    message.autoplaysSinceLastAd = object.autoplaysSinceLastAd ?? undefined;
    message.vis = object.vis ?? undefined;
    message.fling = object.fling ?? undefined;
    message.splay = object.splay ?? undefined;
    message.autoplay = object.autoplay ?? undefined;
    message.timeOfLastInstreamPrerollAd = object.timeOfLastInstreamPrerollAd ?? undefined;
    message.currentUrl = object.currentUrl ?? undefined;
    message.referer = object.referer ?? undefined;
    message.loadAnnotationsByDemand = object.loadAnnotationsByDemand ?? undefined;
    message.autoCaptionsDefaultOn = object.autoCaptionsDefaultOn ?? undefined;
    message.slicedBread = object.slicedBread ?? undefined;
    message.autonav = object.autonav ?? undefined;
    message.trailer = object.trailer ?? undefined;
    message.playerWidthPixels = object.playerWidthPixels ?? undefined;
    message.playerHeightPixels = object.playerHeightPixels ?? undefined;
    message.snd = object.snd ?? undefined;
    message.vnd = object.vnd ?? undefined;
    message.uao = object.uao ?? undefined;
    message.mutedAutoplay = object.mutedAutoplay ?? undefined;
    message.enablePrivacyFilter = object.enablePrivacyFilter ?? undefined;
    message.isLivingRoomDeeplink = object.isLivingRoomDeeplink ?? undefined;
    message.signatureTimestamp = object.signatureTimestamp ?? undefined;
    message.isInlinePlaybackNoAd = object.isInlinePlaybackNoAd ?? undefined;
    message.isInlineUnmutedPlayback = object.isInlineUnmutedPlayback ?? undefined;
    message.playPackageVersion = object.playPackageVersion ?? undefined;
    message.isSequenceEntry = object.isSequenceEntry ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
