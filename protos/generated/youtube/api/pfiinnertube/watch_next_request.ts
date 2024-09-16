// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: youtube/api/pfiinnertube/watch_next_request.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { InnerTubeContext } from "./innertube_context.js";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface WatchNextRequest {
  context?: InnerTubeContext | undefined;
  videoId?: string | undefined;
  playlistId?: string | undefined;
  params?: string | undefined;
  continuation?: string | undefined;
  isAdPlayback?: boolean | undefined;
  mdxUseDevServer?: boolean | undefined;
  referrer?: string | undefined;
  referringApp?: string | undefined;
  adParams?: string | undefined;
  requestMusicSequence?: boolean | undefined;
  enableMdxAutoplay?: boolean | undefined;
  isMdxPlayback?: boolean | undefined;
  racyCheckOk?: boolean | undefined;
  contentCheckOk?: boolean | undefined;
  isAudioOnly?: boolean | undefined;
  autonavEnabled?: boolean | undefined;
  enablePersistentPlaylistPanel?: boolean | undefined;
  playlistSetVideoId?: string | undefined;
  showRuInvalidTokenMessage?: boolean | undefined;
  serializedThirdPartyEmbedConfig?: string | undefined;
  showContentOwnerOnly?: boolean | undefined;
  isEmbedPreview?: boolean | undefined;
  lastScrubbedInlinePlaybackVideoId?: string | undefined;
  lastAudioTurnedOnInlinePlaybackVideoId?: string | undefined;
  lastAudioTurnedOffInlinePlaybackVideoId?: string | undefined;
  captionsRequested?: boolean | undefined;
  queueContextParams?: Uint8Array | undefined;
  showShortsOnly?: boolean | undefined;
}

function createBaseWatchNextRequest(): WatchNextRequest {
  return {
    context: undefined,
    videoId: undefined,
    playlistId: undefined,
    params: undefined,
    continuation: undefined,
    isAdPlayback: undefined,
    mdxUseDevServer: undefined,
    referrer: undefined,
    referringApp: undefined,
    adParams: undefined,
    requestMusicSequence: undefined,
    enableMdxAutoplay: undefined,
    isMdxPlayback: undefined,
    racyCheckOk: undefined,
    contentCheckOk: undefined,
    isAudioOnly: undefined,
    autonavEnabled: undefined,
    enablePersistentPlaylistPanel: undefined,
    playlistSetVideoId: undefined,
    showRuInvalidTokenMessage: undefined,
    serializedThirdPartyEmbedConfig: undefined,
    showContentOwnerOnly: undefined,
    isEmbedPreview: undefined,
    lastScrubbedInlinePlaybackVideoId: undefined,
    lastAudioTurnedOnInlinePlaybackVideoId: undefined,
    lastAudioTurnedOffInlinePlaybackVideoId: undefined,
    captionsRequested: undefined,
    queueContextParams: undefined,
    showShortsOnly: undefined,
  };
}

export const WatchNextRequest: MessageFns<WatchNextRequest> = {
  encode(message: WatchNextRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      InnerTubeContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.videoId !== undefined) {
      writer.uint32(18).string(message.videoId);
    }
    if (message.playlistId !== undefined) {
      writer.uint32(34).string(message.playlistId);
    }
    if (message.params !== undefined) {
      writer.uint32(50).string(message.params);
    }
    if (message.continuation !== undefined) {
      writer.uint32(66).string(message.continuation);
    }
    if (message.isAdPlayback !== undefined) {
      writer.uint32(72).bool(message.isAdPlayback);
    }
    if (message.mdxUseDevServer !== undefined) {
      writer.uint32(80).bool(message.mdxUseDevServer);
    }
    if (message.referrer !== undefined) {
      writer.uint32(98).string(message.referrer);
    }
    if (message.referringApp !== undefined) {
      writer.uint32(106).string(message.referringApp);
    }
    if (message.adParams !== undefined) {
      writer.uint32(130).string(message.adParams);
    }
    if (message.requestMusicSequence !== undefined) {
      writer.uint32(144).bool(message.requestMusicSequence);
    }
    if (message.enableMdxAutoplay !== undefined) {
      writer.uint32(168).bool(message.enableMdxAutoplay);
    }
    if (message.isMdxPlayback !== undefined) {
      writer.uint32(176).bool(message.isMdxPlayback);
    }
    if (message.racyCheckOk !== undefined) {
      writer.uint32(192).bool(message.racyCheckOk);
    }
    if (message.contentCheckOk !== undefined) {
      writer.uint32(200).bool(message.contentCheckOk);
    }
    if (message.isAudioOnly !== undefined) {
      writer.uint32(208).bool(message.isAudioOnly);
    }
    if (message.autonavEnabled !== undefined) {
      writer.uint32(216).bool(message.autonavEnabled);
    }
    if (message.enablePersistentPlaylistPanel !== undefined) {
      writer.uint32(240).bool(message.enablePersistentPlaylistPanel);
    }
    if (message.playlistSetVideoId !== undefined) {
      writer.uint32(250).string(message.playlistSetVideoId);
    }
    if (message.showRuInvalidTokenMessage !== undefined) {
      writer.uint32(280).bool(message.showRuInvalidTokenMessage);
    }
    if (message.serializedThirdPartyEmbedConfig !== undefined) {
      writer.uint32(298).string(message.serializedThirdPartyEmbedConfig);
    }
    if (message.showContentOwnerOnly !== undefined) {
      writer.uint32(304).bool(message.showContentOwnerOnly);
    }
    if (message.isEmbedPreview !== undefined) {
      writer.uint32(336).bool(message.isEmbedPreview);
    }
    if (message.lastScrubbedInlinePlaybackVideoId !== undefined) {
      writer.uint32(346).string(message.lastScrubbedInlinePlaybackVideoId);
    }
    if (message.lastAudioTurnedOnInlinePlaybackVideoId !== undefined) {
      writer.uint32(354).string(message.lastAudioTurnedOnInlinePlaybackVideoId);
    }
    if (message.lastAudioTurnedOffInlinePlaybackVideoId !== undefined) {
      writer.uint32(362).string(message.lastAudioTurnedOffInlinePlaybackVideoId);
    }
    if (message.captionsRequested !== undefined) {
      writer.uint32(376).bool(message.captionsRequested);
    }
    if (message.queueContextParams !== undefined) {
      writer.uint32(402).bytes(message.queueContextParams);
    }
    if (message.showShortsOnly !== undefined) {
      writer.uint32(440).bool(message.showShortsOnly);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WatchNextRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWatchNextRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context = InnerTubeContext.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.videoId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.playlistId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.params = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.continuation = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isAdPlayback = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.mdxUseDevServer = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.referrer = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.referringApp = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.adParams = reader.string();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.requestMusicSequence = reader.bool();
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.enableMdxAutoplay = reader.bool();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.isMdxPlayback = reader.bool();
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.racyCheckOk = reader.bool();
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.contentCheckOk = reader.bool();
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.isAudioOnly = reader.bool();
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.autonavEnabled = reader.bool();
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.enablePersistentPlaylistPanel = reader.bool();
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.playlistSetVideoId = reader.string();
          continue;
        case 35:
          if (tag !== 280) {
            break;
          }

          message.showRuInvalidTokenMessage = reader.bool();
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.serializedThirdPartyEmbedConfig = reader.string();
          continue;
        case 38:
          if (tag !== 304) {
            break;
          }

          message.showContentOwnerOnly = reader.bool();
          continue;
        case 42:
          if (tag !== 336) {
            break;
          }

          message.isEmbedPreview = reader.bool();
          continue;
        case 43:
          if (tag !== 346) {
            break;
          }

          message.lastScrubbedInlinePlaybackVideoId = reader.string();
          continue;
        case 44:
          if (tag !== 354) {
            break;
          }

          message.lastAudioTurnedOnInlinePlaybackVideoId = reader.string();
          continue;
        case 45:
          if (tag !== 362) {
            break;
          }

          message.lastAudioTurnedOffInlinePlaybackVideoId = reader.string();
          continue;
        case 47:
          if (tag !== 376) {
            break;
          }

          message.captionsRequested = reader.bool();
          continue;
        case 50:
          if (tag !== 402) {
            break;
          }

          message.queueContextParams = reader.bytes();
          continue;
        case 55:
          if (tag !== 440) {
            break;
          }

          message.showShortsOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WatchNextRequest {
    return {
      context: isSet(object.context) ? InnerTubeContext.fromJSON(object.context) : undefined,
      videoId: isSet(object.videoId) ? globalThis.String(object.videoId) : undefined,
      playlistId: isSet(object.playlistId) ? globalThis.String(object.playlistId) : undefined,
      params: isSet(object.params) ? globalThis.String(object.params) : undefined,
      continuation: isSet(object.continuation) ? globalThis.String(object.continuation) : undefined,
      isAdPlayback: isSet(object.isAdPlayback) ? globalThis.Boolean(object.isAdPlayback) : undefined,
      mdxUseDevServer: isSet(object.mdxUseDevServer) ? globalThis.Boolean(object.mdxUseDevServer) : undefined,
      referrer: isSet(object.referrer) ? globalThis.String(object.referrer) : undefined,
      referringApp: isSet(object.referringApp) ? globalThis.String(object.referringApp) : undefined,
      adParams: isSet(object.adParams) ? globalThis.String(object.adParams) : undefined,
      requestMusicSequence: isSet(object.requestMusicSequence)
        ? globalThis.Boolean(object.requestMusicSequence)
        : undefined,
      enableMdxAutoplay: isSet(object.enableMdxAutoplay) ? globalThis.Boolean(object.enableMdxAutoplay) : undefined,
      isMdxPlayback: isSet(object.isMdxPlayback) ? globalThis.Boolean(object.isMdxPlayback) : undefined,
      racyCheckOk: isSet(object.racyCheckOk) ? globalThis.Boolean(object.racyCheckOk) : undefined,
      contentCheckOk: isSet(object.contentCheckOk) ? globalThis.Boolean(object.contentCheckOk) : undefined,
      isAudioOnly: isSet(object.isAudioOnly) ? globalThis.Boolean(object.isAudioOnly) : undefined,
      autonavEnabled: isSet(object.autonavEnabled) ? globalThis.Boolean(object.autonavEnabled) : undefined,
      enablePersistentPlaylistPanel: isSet(object.enablePersistentPlaylistPanel)
        ? globalThis.Boolean(object.enablePersistentPlaylistPanel)
        : undefined,
      playlistSetVideoId: isSet(object.playlistSetVideoId) ? globalThis.String(object.playlistSetVideoId) : undefined,
      showRuInvalidTokenMessage: isSet(object.showRuInvalidTokenMessage)
        ? globalThis.Boolean(object.showRuInvalidTokenMessage)
        : undefined,
      serializedThirdPartyEmbedConfig: isSet(object.serializedThirdPartyEmbedConfig)
        ? globalThis.String(object.serializedThirdPartyEmbedConfig)
        : undefined,
      showContentOwnerOnly: isSet(object.showContentOwnerOnly)
        ? globalThis.Boolean(object.showContentOwnerOnly)
        : undefined,
      isEmbedPreview: isSet(object.isEmbedPreview) ? globalThis.Boolean(object.isEmbedPreview) : undefined,
      lastScrubbedInlinePlaybackVideoId: isSet(object.lastScrubbedInlinePlaybackVideoId)
        ? globalThis.String(object.lastScrubbedInlinePlaybackVideoId)
        : undefined,
      lastAudioTurnedOnInlinePlaybackVideoId: isSet(object.lastAudioTurnedOnInlinePlaybackVideoId)
        ? globalThis.String(object.lastAudioTurnedOnInlinePlaybackVideoId)
        : undefined,
      lastAudioTurnedOffInlinePlaybackVideoId: isSet(object.lastAudioTurnedOffInlinePlaybackVideoId)
        ? globalThis.String(object.lastAudioTurnedOffInlinePlaybackVideoId)
        : undefined,
      captionsRequested: isSet(object.captionsRequested) ? globalThis.Boolean(object.captionsRequested) : undefined,
      queueContextParams: isSet(object.queueContextParams) ? bytesFromBase64(object.queueContextParams) : undefined,
      showShortsOnly: isSet(object.showShortsOnly) ? globalThis.Boolean(object.showShortsOnly) : undefined,
    };
  },

  toJSON(message: WatchNextRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = InnerTubeContext.toJSON(message.context);
    }
    if (message.videoId !== undefined) {
      obj.videoId = message.videoId;
    }
    if (message.playlistId !== undefined) {
      obj.playlistId = message.playlistId;
    }
    if (message.params !== undefined) {
      obj.params = message.params;
    }
    if (message.continuation !== undefined) {
      obj.continuation = message.continuation;
    }
    if (message.isAdPlayback !== undefined) {
      obj.isAdPlayback = message.isAdPlayback;
    }
    if (message.mdxUseDevServer !== undefined) {
      obj.mdxUseDevServer = message.mdxUseDevServer;
    }
    if (message.referrer !== undefined) {
      obj.referrer = message.referrer;
    }
    if (message.referringApp !== undefined) {
      obj.referringApp = message.referringApp;
    }
    if (message.adParams !== undefined) {
      obj.adParams = message.adParams;
    }
    if (message.requestMusicSequence !== undefined) {
      obj.requestMusicSequence = message.requestMusicSequence;
    }
    if (message.enableMdxAutoplay !== undefined) {
      obj.enableMdxAutoplay = message.enableMdxAutoplay;
    }
    if (message.isMdxPlayback !== undefined) {
      obj.isMdxPlayback = message.isMdxPlayback;
    }
    if (message.racyCheckOk !== undefined) {
      obj.racyCheckOk = message.racyCheckOk;
    }
    if (message.contentCheckOk !== undefined) {
      obj.contentCheckOk = message.contentCheckOk;
    }
    if (message.isAudioOnly !== undefined) {
      obj.isAudioOnly = message.isAudioOnly;
    }
    if (message.autonavEnabled !== undefined) {
      obj.autonavEnabled = message.autonavEnabled;
    }
    if (message.enablePersistentPlaylistPanel !== undefined) {
      obj.enablePersistentPlaylistPanel = message.enablePersistentPlaylistPanel;
    }
    if (message.playlistSetVideoId !== undefined) {
      obj.playlistSetVideoId = message.playlistSetVideoId;
    }
    if (message.showRuInvalidTokenMessage !== undefined) {
      obj.showRuInvalidTokenMessage = message.showRuInvalidTokenMessage;
    }
    if (message.serializedThirdPartyEmbedConfig !== undefined) {
      obj.serializedThirdPartyEmbedConfig = message.serializedThirdPartyEmbedConfig;
    }
    if (message.showContentOwnerOnly !== undefined) {
      obj.showContentOwnerOnly = message.showContentOwnerOnly;
    }
    if (message.isEmbedPreview !== undefined) {
      obj.isEmbedPreview = message.isEmbedPreview;
    }
    if (message.lastScrubbedInlinePlaybackVideoId !== undefined) {
      obj.lastScrubbedInlinePlaybackVideoId = message.lastScrubbedInlinePlaybackVideoId;
    }
    if (message.lastAudioTurnedOnInlinePlaybackVideoId !== undefined) {
      obj.lastAudioTurnedOnInlinePlaybackVideoId = message.lastAudioTurnedOnInlinePlaybackVideoId;
    }
    if (message.lastAudioTurnedOffInlinePlaybackVideoId !== undefined) {
      obj.lastAudioTurnedOffInlinePlaybackVideoId = message.lastAudioTurnedOffInlinePlaybackVideoId;
    }
    if (message.captionsRequested !== undefined) {
      obj.captionsRequested = message.captionsRequested;
    }
    if (message.queueContextParams !== undefined) {
      obj.queueContextParams = base64FromBytes(message.queueContextParams);
    }
    if (message.showShortsOnly !== undefined) {
      obj.showShortsOnly = message.showShortsOnly;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WatchNextRequest>, I>>(base?: I): WatchNextRequest {
    return WatchNextRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WatchNextRequest>, I>>(object: I): WatchNextRequest {
    const message = createBaseWatchNextRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? InnerTubeContext.fromPartial(object.context)
      : undefined;
    message.videoId = object.videoId ?? undefined;
    message.playlistId = object.playlistId ?? undefined;
    message.params = object.params ?? undefined;
    message.continuation = object.continuation ?? undefined;
    message.isAdPlayback = object.isAdPlayback ?? undefined;
    message.mdxUseDevServer = object.mdxUseDevServer ?? undefined;
    message.referrer = object.referrer ?? undefined;
    message.referringApp = object.referringApp ?? undefined;
    message.adParams = object.adParams ?? undefined;
    message.requestMusicSequence = object.requestMusicSequence ?? undefined;
    message.enableMdxAutoplay = object.enableMdxAutoplay ?? undefined;
    message.isMdxPlayback = object.isMdxPlayback ?? undefined;
    message.racyCheckOk = object.racyCheckOk ?? undefined;
    message.contentCheckOk = object.contentCheckOk ?? undefined;
    message.isAudioOnly = object.isAudioOnly ?? undefined;
    message.autonavEnabled = object.autonavEnabled ?? undefined;
    message.enablePersistentPlaylistPanel = object.enablePersistentPlaylistPanel ?? undefined;
    message.playlistSetVideoId = object.playlistSetVideoId ?? undefined;
    message.showRuInvalidTokenMessage = object.showRuInvalidTokenMessage ?? undefined;
    message.serializedThirdPartyEmbedConfig = object.serializedThirdPartyEmbedConfig ?? undefined;
    message.showContentOwnerOnly = object.showContentOwnerOnly ?? undefined;
    message.isEmbedPreview = object.isEmbedPreview ?? undefined;
    message.lastScrubbedInlinePlaybackVideoId = object.lastScrubbedInlinePlaybackVideoId ?? undefined;
    message.lastAudioTurnedOnInlinePlaybackVideoId = object.lastAudioTurnedOnInlinePlaybackVideoId ?? undefined;
    message.lastAudioTurnedOffInlinePlaybackVideoId = object.lastAudioTurnedOffInlinePlaybackVideoId ?? undefined;
    message.captionsRequested = object.captionsRequested ?? undefined;
    message.queueContextParams = object.queueContextParams ?? undefined;
    message.showShortsOnly = object.showShortsOnly ?? undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  const bin = globalThis.atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(globalThis.String.fromCharCode(byte));
  });
  return globalThis.btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

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
