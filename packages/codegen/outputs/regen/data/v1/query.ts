import { ContentHash, ContentHashAmino, ContentHashSDKType, DigestAlgorithm, RawMediaType, GraphCanonicalizationAlgorithm, GraphMerkleTree, ContentEntry, ContentEntryAmino, ContentEntrySDKType, digestAlgorithmFromJSON, rawMediaTypeFromJSON, digestAlgorithmToJSON, rawMediaTypeToJSON, graphCanonicalizationAlgorithmFromJSON, graphMerkleTreeFromJSON, graphCanonicalizationAlgorithmToJSON, graphMerkleTreeToJSON } from "./types";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** QueryByIRIRequest is the Query/ByIRI request type. */
export interface QueryByIRIRequest {
  /** iri is the IRI for the anchored data. */
  iri: string;
}
export interface QueryByIRIRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryByIRIRequest";
  value: Uint8Array;
}
/** QueryByIRIRequest is the Query/ByIRI request type. */
export interface QueryByIRIRequestAmino {
  /** iri is the IRI for the anchored data. */
  iri?: string;
}
export interface QueryByIRIRequestAminoMsg {
  type: "/regen.data.v1.QueryByIRIRequest";
  value: QueryByIRIRequestAmino;
}
/** QueryByIRIRequest is the Query/ByIRI request type. */
export interface QueryByIRIRequestSDKType {
  iri: string;
}
/** QueryByIRIResponse is the Query/ByHash response type. */
export interface QueryByIRIResponse {
  /** entry is the ContentEntry for the anchored data. */
  entry?: ContentEntry | undefined;
}
export interface QueryByIRIResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryByIRIResponse";
  value: Uint8Array;
}
/** QueryByIRIResponse is the Query/ByHash response type. */
export interface QueryByIRIResponseAmino {
  /** entry is the ContentEntry for the anchored data. */
  entry?: ContentEntryAmino | undefined;
}
export interface QueryByIRIResponseAminoMsg {
  type: "/regen.data.v1.QueryByIRIResponse";
  value: QueryByIRIResponseAmino;
}
/** QueryByIRIResponse is the Query/ByHash response type. */
export interface QueryByIRIResponseSDKType {
  entry?: ContentEntrySDKType | undefined;
}
/** QueryByHashRequest is the Query/ByHash request type. */
export interface QueryByHashRequest {
  /** content_hash is the ContentHash for the anchored data. */
  contentHash?: ContentHash | undefined;
}
export interface QueryByHashRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryByHashRequest";
  value: Uint8Array;
}
/** QueryByHashRequest is the Query/ByHash request type. */
export interface QueryByHashRequestAmino {
  /** content_hash is the ContentHash for the anchored data. */
  content_hash?: ContentHashAmino | undefined;
}
export interface QueryByHashRequestAminoMsg {
  type: "/regen.data.v1.QueryByHashRequest";
  value: QueryByHashRequestAmino;
}
/** QueryByHashRequest is the Query/ByHash request type. */
export interface QueryByHashRequestSDKType {
  content_hash?: ContentHashSDKType | undefined;
}
/** QueryByHashResponse is the Query/ByHash response type. */
export interface QueryByHashResponse {
  /** entry is the ContentEntry for the anchored data. */
  entry?: ContentEntry | undefined;
}
export interface QueryByHashResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryByHashResponse";
  value: Uint8Array;
}
/** QueryByHashResponse is the Query/ByHash response type. */
export interface QueryByHashResponseAmino {
  /** entry is the ContentEntry for the anchored data. */
  entry?: ContentEntryAmino | undefined;
}
export interface QueryByHashResponseAminoMsg {
  type: "/regen.data.v1.QueryByHashResponse";
  value: QueryByHashResponseAmino;
}
/** QueryByHashResponse is the Query/ByHash response type. */
export interface QueryByHashResponseSDKType {
  entry?: ContentEntrySDKType | undefined;
}
/** QueryByAttestorRequest is the Query/ByAttestor request type. */
export interface QueryByAttestorRequest {
  /** attestor is the address of the attestor. */
  attestor: string;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequest | undefined;
}
export interface QueryByAttestorRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryByAttestorRequest";
  value: Uint8Array;
}
/** QueryByAttestorRequest is the Query/ByAttestor request type. */
export interface QueryByAttestorRequestAmino {
  /** attestor is the address of the attestor. */
  attestor?: string;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryByAttestorRequestAminoMsg {
  type: "/regen.data.v1.QueryByAttestorRequest";
  value: QueryByAttestorRequestAmino;
}
/** QueryByAttestorRequest is the Query/ByAttestor request type. */
export interface QueryByAttestorRequestSDKType {
  attestor: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryByAttestorResponse is the Query/ByAttestor response type. */
export interface QueryByAttestorResponse {
  /** entries are the ContentEntries attested to by the attestor. */
  entries: ContentEntry[];
  /** pagination is the pagination PageResponse. */
  pagination?: PageResponse | undefined;
}
export interface QueryByAttestorResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryByAttestorResponse";
  value: Uint8Array;
}
/** QueryByAttestorResponse is the Query/ByAttestor response type. */
export interface QueryByAttestorResponseAmino {
  /** entries are the ContentEntries attested to by the attestor. */
  entries?: ContentEntryAmino[];
  /** pagination is the pagination PageResponse. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryByAttestorResponseAminoMsg {
  type: "/regen.data.v1.QueryByAttestorResponse";
  value: QueryByAttestorResponseAmino;
}
/** QueryByAttestorResponse is the Query/ByAttestor response type. */
export interface QueryByAttestorResponseSDKType {
  entries: ContentEntrySDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryIRIByHashRequest is the Query/IRIByHash request type. */
export interface QueryIRIByHashRequest {
  /** content_hash is the ContentHash for the anchored data. */
  contentHash?: ContentHash | undefined;
}
export interface QueryIRIByHashRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryIRIByHashRequest";
  value: Uint8Array;
}
/** QueryIRIByHashRequest is the Query/IRIByHash request type. */
export interface QueryIRIByHashRequestAmino {
  /** content_hash is the ContentHash for the anchored data. */
  content_hash?: ContentHashAmino | undefined;
}
export interface QueryIRIByHashRequestAminoMsg {
  type: "/regen.data.v1.QueryIRIByHashRequest";
  value: QueryIRIByHashRequestAmino;
}
/** QueryIRIByHashRequest is the Query/IRIByHash request type. */
export interface QueryIRIByHashRequestSDKType {
  content_hash?: ContentHashSDKType | undefined;
}
/** QueryIRIByHashResponse is the Query/IRIByHash response type. */
export interface QueryIRIByHashResponse {
  /** iri is the IRI for the content hash. */
  iri: string;
}
export interface QueryIRIByHashResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryIRIByHashResponse";
  value: Uint8Array;
}
/** QueryIRIByHashResponse is the Query/IRIByHash response type. */
export interface QueryIRIByHashResponseAmino {
  /** iri is the IRI for the content hash. */
  iri?: string;
}
export interface QueryIRIByHashResponseAminoMsg {
  type: "/regen.data.v1.QueryIRIByHashResponse";
  value: QueryIRIByHashResponseAmino;
}
/** QueryIRIByHashResponse is the Query/IRIByHash response type. */
export interface QueryIRIByHashResponseSDKType {
  iri: string;
}
/** QueryIRIByRawHashRequest is the Query/IRIByRawHash request type. */
export interface QueryIRIByRawHashRequest {
  /**
   * hash represents the hash of the data based on the digest_algorithm and must
   * be encoded as a base64 string. When hash is provided as a URL parameter,
   * all instances of "+" should also be replaced with "%2b".
   */
  hash: string;
  /** digest_algorithm represents the hash digest algorithm. */
  digestAlgorithm: DigestAlgorithm;
  /** media_type represents the media type for raw data. */
  mediaType: RawMediaType;
}
export interface QueryIRIByRawHashRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryIRIByRawHashRequest";
  value: Uint8Array;
}
/** QueryIRIByRawHashRequest is the Query/IRIByRawHash request type. */
export interface QueryIRIByRawHashRequestAmino {
  /**
   * hash represents the hash of the data based on the digest_algorithm and must
   * be encoded as a base64 string. When hash is provided as a URL parameter,
   * all instances of "+" should also be replaced with "%2b".
   */
  hash?: string;
  /** digest_algorithm represents the hash digest algorithm. */
  digest_algorithm?: DigestAlgorithm;
  /** media_type represents the media type for raw data. */
  media_type?: RawMediaType;
}
export interface QueryIRIByRawHashRequestAminoMsg {
  type: "/regen.data.v1.QueryIRIByRawHashRequest";
  value: QueryIRIByRawHashRequestAmino;
}
/** QueryIRIByRawHashRequest is the Query/IRIByRawHash request type. */
export interface QueryIRIByRawHashRequestSDKType {
  hash: string;
  digest_algorithm: DigestAlgorithm;
  media_type: RawMediaType;
}
/** QueryIRIByRawHashResponse is the Query/IRIByRawHash response type. */
export interface QueryIRIByRawHashResponse {
  /** iri is the IRI for the content hash. */
  iri: string;
}
export interface QueryIRIByRawHashResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryIRIByRawHashResponse";
  value: Uint8Array;
}
/** QueryIRIByRawHashResponse is the Query/IRIByRawHash response type. */
export interface QueryIRIByRawHashResponseAmino {
  /** iri is the IRI for the content hash. */
  iri?: string;
}
export interface QueryIRIByRawHashResponseAminoMsg {
  type: "/regen.data.v1.QueryIRIByRawHashResponse";
  value: QueryIRIByRawHashResponseAmino;
}
/** QueryIRIByRawHashResponse is the Query/IRIByRawHash response type. */
export interface QueryIRIByRawHashResponseSDKType {
  iri: string;
}
/** QueryIRIByGraphHashRequest is the Query/IRIByGraphHash request type. */
export interface QueryIRIByGraphHashRequest {
  /**
   * hash represents the hash of the data based on the digest_algorithm and must
   * be encoded as a base64 string. When hash is provided as a URL parameter,
   * all instances of "+" should also be replaced with "%2b".
   */
  hash: string;
  /** digest_algorithm represents the hash digest algorithm. */
  digestAlgorithm: DigestAlgorithm;
  /**
   * graph_canonicalization_algorithm represents the RDF graph
   * canonicalization algorithm.
   */
  canonicalizationAlgorithm: GraphCanonicalizationAlgorithm;
  /** merkle_tree is the merkle tree type used for the graph hash, if any. */
  merkleTree: GraphMerkleTree;
}
export interface QueryIRIByGraphHashRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryIRIByGraphHashRequest";
  value: Uint8Array;
}
/** QueryIRIByGraphHashRequest is the Query/IRIByGraphHash request type. */
export interface QueryIRIByGraphHashRequestAmino {
  /**
   * hash represents the hash of the data based on the digest_algorithm and must
   * be encoded as a base64 string. When hash is provided as a URL parameter,
   * all instances of "+" should also be replaced with "%2b".
   */
  hash?: string;
  /** digest_algorithm represents the hash digest algorithm. */
  digest_algorithm?: DigestAlgorithm;
  /**
   * graph_canonicalization_algorithm represents the RDF graph
   * canonicalization algorithm.
   */
  canonicalization_algorithm?: GraphCanonicalizationAlgorithm;
  /** merkle_tree is the merkle tree type used for the graph hash, if any. */
  merkle_tree?: GraphMerkleTree;
}
export interface QueryIRIByGraphHashRequestAminoMsg {
  type: "/regen.data.v1.QueryIRIByGraphHashRequest";
  value: QueryIRIByGraphHashRequestAmino;
}
/** QueryIRIByGraphHashRequest is the Query/IRIByGraphHash request type. */
export interface QueryIRIByGraphHashRequestSDKType {
  hash: string;
  digest_algorithm: DigestAlgorithm;
  canonicalization_algorithm: GraphCanonicalizationAlgorithm;
  merkle_tree: GraphMerkleTree;
}
/** QueryIRIByGraphHashResponse is the Query/IRIByGraphHash response type. */
export interface QueryIRIByGraphHashResponse {
  /** iri is the IRI for the content hash. */
  iri: string;
}
export interface QueryIRIByGraphHashResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryIRIByGraphHashResponse";
  value: Uint8Array;
}
/** QueryIRIByGraphHashResponse is the Query/IRIByGraphHash response type. */
export interface QueryIRIByGraphHashResponseAmino {
  /** iri is the IRI for the content hash. */
  iri?: string;
}
export interface QueryIRIByGraphHashResponseAminoMsg {
  type: "/regen.data.v1.QueryIRIByGraphHashResponse";
  value: QueryIRIByGraphHashResponseAmino;
}
/** QueryIRIByGraphHashResponse is the Query/IRIByGraphHash response type. */
export interface QueryIRIByGraphHashResponseSDKType {
  iri: string;
}
/** QueryHashByIRIRequest is the Query/HashByIRI request type. */
export interface QueryHashByIRIRequest {
  /** iri is the IRI for the content hash. */
  iri: string;
}
export interface QueryHashByIRIRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryHashByIRIRequest";
  value: Uint8Array;
}
/** QueryHashByIRIRequest is the Query/HashByIRI request type. */
export interface QueryHashByIRIRequestAmino {
  /** iri is the IRI for the content hash. */
  iri?: string;
}
export interface QueryHashByIRIRequestAminoMsg {
  type: "/regen.data.v1.QueryHashByIRIRequest";
  value: QueryHashByIRIRequestAmino;
}
/** QueryHashByIRIRequest is the Query/HashByIRI request type. */
export interface QueryHashByIRIRequestSDKType {
  iri: string;
}
/** QueryHashByIRIResponse is the Query/HashByIRI response type. */
export interface QueryHashByIRIResponse {
  /** content_hash is the ContentHash for the IRI. */
  contentHash?: ContentHash | undefined;
}
export interface QueryHashByIRIResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryHashByIRIResponse";
  value: Uint8Array;
}
/** QueryHashByIRIResponse is the Query/HashByIRI response type. */
export interface QueryHashByIRIResponseAmino {
  /** content_hash is the ContentHash for the IRI. */
  content_hash?: ContentHashAmino | undefined;
}
export interface QueryHashByIRIResponseAminoMsg {
  type: "/regen.data.v1.QueryHashByIRIResponse";
  value: QueryHashByIRIResponseAmino;
}
/** QueryHashByIRIResponse is the Query/HashByIRI response type. */
export interface QueryHashByIRIResponseSDKType {
  content_hash?: ContentHashSDKType | undefined;
}
/** QueryAttestorsByIRIRequest is the Query/AttestorsByIRI request type. */
export interface QueryAttestorsByIRIRequest {
  /** iri is the IRI for the anchored data. */
  iri: string;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequest | undefined;
}
export interface QueryAttestorsByIRIRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryAttestorsByIRIRequest";
  value: Uint8Array;
}
/** QueryAttestorsByIRIRequest is the Query/AttestorsByIRI request type. */
export interface QueryAttestorsByIRIRequestAmino {
  /** iri is the IRI for the anchored data. */
  iri?: string;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAttestorsByIRIRequestAminoMsg {
  type: "/regen.data.v1.QueryAttestorsByIRIRequest";
  value: QueryAttestorsByIRIRequestAmino;
}
/** QueryAttestorsByIRIRequest is the Query/AttestorsByIRI request type. */
export interface QueryAttestorsByIRIRequestSDKType {
  iri: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryAttestorsByIRIResponse is the Query/AttestorsByIRI response type. */
export interface QueryAttestorsByIRIResponse {
  /** attestors are the addresses of the attestors. */
  attestors: string[];
  /** pagination is the pagination PageResponse. */
  pagination?: PageResponse | undefined;
}
export interface QueryAttestorsByIRIResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryAttestorsByIRIResponse";
  value: Uint8Array;
}
/** QueryAttestorsByIRIResponse is the Query/AttestorsByIRI response type. */
export interface QueryAttestorsByIRIResponseAmino {
  /** attestors are the addresses of the attestors. */
  attestors?: string[];
  /** pagination is the pagination PageResponse. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryAttestorsByIRIResponseAminoMsg {
  type: "/regen.data.v1.QueryAttestorsByIRIResponse";
  value: QueryAttestorsByIRIResponseAmino;
}
/** QueryAttestorsByIRIResponse is the Query/AttestorsByIRI response type. */
export interface QueryAttestorsByIRIResponseSDKType {
  attestors: string[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryAttestorsByHashRequest is the Query/AttestorsByHash request type. */
export interface QueryAttestorsByHashRequest {
  /** content_hash is the ContentHash for the anchored data. */
  contentHash?: ContentHash | undefined;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequest | undefined;
}
export interface QueryAttestorsByHashRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryAttestorsByHashRequest";
  value: Uint8Array;
}
/** QueryAttestorsByHashRequest is the Query/AttestorsByHash request type. */
export interface QueryAttestorsByHashRequestAmino {
  /** content_hash is the ContentHash for the anchored data. */
  content_hash?: ContentHashAmino | undefined;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAttestorsByHashRequestAminoMsg {
  type: "/regen.data.v1.QueryAttestorsByHashRequest";
  value: QueryAttestorsByHashRequestAmino;
}
/** QueryAttestorsByHashRequest is the Query/AttestorsByHash request type. */
export interface QueryAttestorsByHashRequestSDKType {
  content_hash?: ContentHashSDKType | undefined;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryAttestorsByHashResponse is the Query/AttestorsByHash response type. */
export interface QueryAttestorsByHashResponse {
  /** attestors are the addresses of the attestors. */
  attestors: string[];
  /** pagination is the pagination PageResponse. */
  pagination?: PageResponse | undefined;
}
export interface QueryAttestorsByHashResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryAttestorsByHashResponse";
  value: Uint8Array;
}
/** QueryAttestorsByHashResponse is the Query/AttestorsByHash response type. */
export interface QueryAttestorsByHashResponseAmino {
  /** attestors are the addresses of the attestors. */
  attestors?: string[];
  /** pagination is the pagination PageResponse. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryAttestorsByHashResponseAminoMsg {
  type: "/regen.data.v1.QueryAttestorsByHashResponse";
  value: QueryAttestorsByHashResponseAmino;
}
/** QueryAttestorsByHashResponse is the Query/AttestorsByHash response type. */
export interface QueryAttestorsByHashResponseSDKType {
  attestors: string[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */
export interface QueryResolversByIRIRequest {
  /** iri is the IRI for the anchored data. */
  iri: string;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequest | undefined;
}
export interface QueryResolversByIRIRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolversByIRIRequest";
  value: Uint8Array;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */
export interface QueryResolversByIRIRequestAmino {
  /** iri is the IRI for the anchored data. */
  iri?: string;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryResolversByIRIRequestAminoMsg {
  type: "/regen.data.v1.QueryResolversByIRIRequest";
  value: QueryResolversByIRIRequestAmino;
}
/** QueryResolversByIRIRequest is the Query/ResolversByIRI request type. */
export interface QueryResolversByIRIRequestSDKType {
  iri: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */
export interface QueryResolversByIRIResponse {
  /**
   * resolver_urls are the resolver URLs that have been registered for the
   * anchored data.
   */
  resolverUrls: string[];
  /** pagination is the PageResponse to use for pagination. */
  pagination?: PageResponse | undefined;
}
export interface QueryResolversByIRIResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolversByIRIResponse";
  value: Uint8Array;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */
export interface QueryResolversByIRIResponseAmino {
  /**
   * resolver_urls are the resolver URLs that have been registered for the
   * anchored data.
   */
  resolver_urls?: string[];
  /** pagination is the PageResponse to use for pagination. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryResolversByIRIResponseAminoMsg {
  type: "/regen.data.v1.QueryResolversByIRIResponse";
  value: QueryResolversByIRIResponseAmino;
}
/** QueryResolversByIRIResponse is the Query/ResolversByIRI response type. */
export interface QueryResolversByIRIResponseSDKType {
  resolver_urls: string[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */
export interface QueryResolversByHashRequest {
  /** content_hash is the ContentHash for the anchored data. */
  contentHash?: ContentHash | undefined;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequest | undefined;
}
export interface QueryResolversByHashRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolversByHashRequest";
  value: Uint8Array;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */
export interface QueryResolversByHashRequestAmino {
  /** content_hash is the ContentHash for the anchored data. */
  content_hash?: ContentHashAmino | undefined;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryResolversByHashRequestAminoMsg {
  type: "/regen.data.v1.QueryResolversByHashRequest";
  value: QueryResolversByHashRequestAmino;
}
/** QueryResolversByHashRequest is the Query/ResolversByHash request type. */
export interface QueryResolversByHashRequestSDKType {
  content_hash?: ContentHashSDKType | undefined;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */
export interface QueryResolversByHashResponse {
  /**
   * resolver_urls are the resolver URLs that have been registered for the
   * anchored data.
   */
  resolverUrls: string[];
  /** pagination is the PageResponse to use for pagination. */
  pagination?: PageResponse | undefined;
}
export interface QueryResolversByHashResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolversByHashResponse";
  value: Uint8Array;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */
export interface QueryResolversByHashResponseAmino {
  /**
   * resolver_urls are the resolver URLs that have been registered for the
   * anchored data.
   */
  resolver_urls?: string[];
  /** pagination is the PageResponse to use for pagination. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryResolversByHashResponseAminoMsg {
  type: "/regen.data.v1.QueryResolversByHashResponse";
  value: QueryResolversByHashResponseAmino;
}
/** QueryResolversByHashResponse is the Query/ResolversByHash response type. */
export interface QueryResolversByHashResponseSDKType {
  resolver_urls: string[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryResolverInfoRequest is the Query/ResolverInfo request type. */
export interface QueryResolverInfoRequest {
  /** url is the resolver URL that has been registered. */
  url: string;
}
export interface QueryResolverInfoRequestProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolverInfoRequest";
  value: Uint8Array;
}
/** QueryResolverInfoRequest is the Query/ResolverInfo request type. */
export interface QueryResolverInfoRequestAmino {
  /** url is the resolver URL that has been registered. */
  url?: string;
}
export interface QueryResolverInfoRequestAminoMsg {
  type: "/regen.data.v1.QueryResolverInfoRequest";
  value: QueryResolverInfoRequestAmino;
}
/** QueryResolverInfoRequest is the Query/ResolverInfo request type. */
export interface QueryResolverInfoRequestSDKType {
  url: string;
}
/** QueryResolverInfoResponse is the Query/ResolverInfo response type. */
export interface QueryResolverInfoResponse {
  /** id is the id of the resolver which can be used in Msg/RegisterResolver. */
  id: bigint;
  /** manager is the bech32 account address of the resolver manager. */
  manager: string;
}
export interface QueryResolverInfoResponseProtoMsg {
  typeUrl: "/regen.data.v1.QueryResolverInfoResponse";
  value: Uint8Array;
}
/** QueryResolverInfoResponse is the Query/ResolverInfo response type. */
export interface QueryResolverInfoResponseAmino {
  /** id is the id of the resolver which can be used in Msg/RegisterResolver. */
  id?: string;
  /** manager is the bech32 account address of the resolver manager. */
  manager?: string;
}
export interface QueryResolverInfoResponseAminoMsg {
  type: "/regen.data.v1.QueryResolverInfoResponse";
  value: QueryResolverInfoResponseAmino;
}
/** QueryResolverInfoResponse is the Query/ResolverInfo response type. */
export interface QueryResolverInfoResponseSDKType {
  id: bigint;
  manager: string;
}
function createBaseQueryByIRIRequest(): QueryByIRIRequest {
  return {
    iri: ""
  };
}
export const QueryByIRIRequest = {
  typeUrl: "/regen.data.v1.QueryByIRIRequest",
  encode(message: QueryByIRIRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryByIRIRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByIRIRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryByIRIRequest {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },
  toJSON(message: QueryByIRIRequest): JsonSafe<QueryByIRIRequest> {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryByIRIRequest>): QueryByIRIRequest {
    const message = createBaseQueryByIRIRequest();
    message.iri = object.iri ?? "";
    return message;
  },
  fromSDK(object: QueryByIRIRequestSDKType): QueryByIRIRequest {
    return {
      iri: object?.iri
    };
  },
  toSDK(message: QueryByIRIRequest): QueryByIRIRequestSDKType {
    const obj: any = {};
    obj.iri = message.iri;
    return obj;
  },
  fromAmino(object: QueryByIRIRequestAmino): QueryByIRIRequest {
    const message = createBaseQueryByIRIRequest();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    return message;
  },
  toAmino(message: QueryByIRIRequest): QueryByIRIRequestAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    return obj;
  },
  fromAminoMsg(object: QueryByIRIRequestAminoMsg): QueryByIRIRequest {
    return QueryByIRIRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryByIRIRequestProtoMsg): QueryByIRIRequest {
    return QueryByIRIRequest.decode(message.value);
  },
  toProto(message: QueryByIRIRequest): Uint8Array {
    return QueryByIRIRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryByIRIRequest): QueryByIRIRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryByIRIRequest",
      value: QueryByIRIRequest.encode(message).finish()
    };
  }
};
function createBaseQueryByIRIResponse(): QueryByIRIResponse {
  return {
    entry: undefined
  };
}
export const QueryByIRIResponse = {
  typeUrl: "/regen.data.v1.QueryByIRIResponse",
  encode(message: QueryByIRIResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.entry !== undefined) {
      ContentEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryByIRIResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByIRIResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entry = ContentEntry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryByIRIResponse {
    return {
      entry: isSet(object.entry) ? ContentEntry.fromJSON(object.entry) : undefined
    };
  },
  toJSON(message: QueryByIRIResponse): JsonSafe<QueryByIRIResponse> {
    const obj: any = {};
    message.entry !== undefined && (obj.entry = message.entry ? ContentEntry.toJSON(message.entry) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryByIRIResponse>): QueryByIRIResponse {
    const message = createBaseQueryByIRIResponse();
    message.entry = object.entry !== undefined && object.entry !== null ? ContentEntry.fromPartial(object.entry) : undefined;
    return message;
  },
  fromSDK(object: QueryByIRIResponseSDKType): QueryByIRIResponse {
    return {
      entry: object.entry ? ContentEntry.fromSDK(object.entry) : undefined
    };
  },
  toSDK(message: QueryByIRIResponse): QueryByIRIResponseSDKType {
    const obj: any = {};
    message.entry !== undefined && (obj.entry = message.entry ? ContentEntry.toSDK(message.entry) : undefined);
    return obj;
  },
  fromAmino(object: QueryByIRIResponseAmino): QueryByIRIResponse {
    const message = createBaseQueryByIRIResponse();
    if (object.entry !== undefined && object.entry !== null) {
      message.entry = ContentEntry.fromAmino(object.entry);
    }
    return message;
  },
  toAmino(message: QueryByIRIResponse): QueryByIRIResponseAmino {
    const obj: any = {};
    obj.entry = message.entry ? ContentEntry.toAmino(message.entry) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryByIRIResponseAminoMsg): QueryByIRIResponse {
    return QueryByIRIResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryByIRIResponseProtoMsg): QueryByIRIResponse {
    return QueryByIRIResponse.decode(message.value);
  },
  toProto(message: QueryByIRIResponse): Uint8Array {
    return QueryByIRIResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryByIRIResponse): QueryByIRIResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryByIRIResponse",
      value: QueryByIRIResponse.encode(message).finish()
    };
  }
};
function createBaseQueryByHashRequest(): QueryByHashRequest {
  return {
    contentHash: undefined
  };
}
export const QueryByHashRequest = {
  typeUrl: "/regen.data.v1.QueryByHashRequest",
  encode(message: QueryByHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryByHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryByHashRequest {
    return {
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined
    };
  },
  toJSON(message: QueryByHashRequest): JsonSafe<QueryByHashRequest> {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryByHashRequest>): QueryByHashRequest {
    const message = createBaseQueryByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  },
  fromSDK(object: QueryByHashRequestSDKType): QueryByHashRequest {
    return {
      contentHash: object.content_hash ? ContentHash.fromSDK(object.content_hash) : undefined
    };
  },
  toSDK(message: QueryByHashRequest): QueryByHashRequestSDKType {
    const obj: any = {};
    message.contentHash !== undefined && (obj.content_hash = message.contentHash ? ContentHash.toSDK(message.contentHash) : undefined);
    return obj;
  },
  fromAmino(object: QueryByHashRequestAmino): QueryByHashRequest {
    const message = createBaseQueryByHashRequest();
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = ContentHash.fromAmino(object.content_hash);
    }
    return message;
  },
  toAmino(message: QueryByHashRequest): QueryByHashRequestAmino {
    const obj: any = {};
    obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryByHashRequestAminoMsg): QueryByHashRequest {
    return QueryByHashRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryByHashRequestProtoMsg): QueryByHashRequest {
    return QueryByHashRequest.decode(message.value);
  },
  toProto(message: QueryByHashRequest): Uint8Array {
    return QueryByHashRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryByHashRequest): QueryByHashRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryByHashRequest",
      value: QueryByHashRequest.encode(message).finish()
    };
  }
};
function createBaseQueryByHashResponse(): QueryByHashResponse {
  return {
    entry: undefined
  };
}
export const QueryByHashResponse = {
  typeUrl: "/regen.data.v1.QueryByHashResponse",
  encode(message: QueryByHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.entry !== undefined) {
      ContentEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryByHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entry = ContentEntry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryByHashResponse {
    return {
      entry: isSet(object.entry) ? ContentEntry.fromJSON(object.entry) : undefined
    };
  },
  toJSON(message: QueryByHashResponse): JsonSafe<QueryByHashResponse> {
    const obj: any = {};
    message.entry !== undefined && (obj.entry = message.entry ? ContentEntry.toJSON(message.entry) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryByHashResponse>): QueryByHashResponse {
    const message = createBaseQueryByHashResponse();
    message.entry = object.entry !== undefined && object.entry !== null ? ContentEntry.fromPartial(object.entry) : undefined;
    return message;
  },
  fromSDK(object: QueryByHashResponseSDKType): QueryByHashResponse {
    return {
      entry: object.entry ? ContentEntry.fromSDK(object.entry) : undefined
    };
  },
  toSDK(message: QueryByHashResponse): QueryByHashResponseSDKType {
    const obj: any = {};
    message.entry !== undefined && (obj.entry = message.entry ? ContentEntry.toSDK(message.entry) : undefined);
    return obj;
  },
  fromAmino(object: QueryByHashResponseAmino): QueryByHashResponse {
    const message = createBaseQueryByHashResponse();
    if (object.entry !== undefined && object.entry !== null) {
      message.entry = ContentEntry.fromAmino(object.entry);
    }
    return message;
  },
  toAmino(message: QueryByHashResponse): QueryByHashResponseAmino {
    const obj: any = {};
    obj.entry = message.entry ? ContentEntry.toAmino(message.entry) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryByHashResponseAminoMsg): QueryByHashResponse {
    return QueryByHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryByHashResponseProtoMsg): QueryByHashResponse {
    return QueryByHashResponse.decode(message.value);
  },
  toProto(message: QueryByHashResponse): Uint8Array {
    return QueryByHashResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryByHashResponse): QueryByHashResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryByHashResponse",
      value: QueryByHashResponse.encode(message).finish()
    };
  }
};
function createBaseQueryByAttestorRequest(): QueryByAttestorRequest {
  return {
    attestor: "",
    pagination: undefined
  };
}
export const QueryByAttestorRequest = {
  typeUrl: "/regen.data.v1.QueryByAttestorRequest",
  encode(message: QueryByAttestorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.attestor !== "") {
      writer.uint32(10).string(message.attestor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryByAttestorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByAttestorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestor = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryByAttestorRequest {
    return {
      attestor: isSet(object.attestor) ? String(object.attestor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryByAttestorRequest): JsonSafe<QueryByAttestorRequest> {
    const obj: any = {};
    message.attestor !== undefined && (obj.attestor = message.attestor);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryByAttestorRequest>): QueryByAttestorRequest {
    const message = createBaseQueryByAttestorRequest();
    message.attestor = object.attestor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryByAttestorRequestSDKType): QueryByAttestorRequest {
    return {
      attestor: object?.attestor,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryByAttestorRequest): QueryByAttestorRequestSDKType {
    const obj: any = {};
    obj.attestor = message.attestor;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryByAttestorRequestAmino): QueryByAttestorRequest {
    const message = createBaseQueryByAttestorRequest();
    if (object.attestor !== undefined && object.attestor !== null) {
      message.attestor = object.attestor;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryByAttestorRequest): QueryByAttestorRequestAmino {
    const obj: any = {};
    obj.attestor = message.attestor === "" ? undefined : message.attestor;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryByAttestorRequestAminoMsg): QueryByAttestorRequest {
    return QueryByAttestorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryByAttestorRequestProtoMsg): QueryByAttestorRequest {
    return QueryByAttestorRequest.decode(message.value);
  },
  toProto(message: QueryByAttestorRequest): Uint8Array {
    return QueryByAttestorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryByAttestorRequest): QueryByAttestorRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryByAttestorRequest",
      value: QueryByAttestorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryByAttestorResponse(): QueryByAttestorResponse {
  return {
    entries: [],
    pagination: undefined
  };
}
export const QueryByAttestorResponse = {
  typeUrl: "/regen.data.v1.QueryByAttestorResponse",
  encode(message: QueryByAttestorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      ContentEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryByAttestorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByAttestorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContentEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryByAttestorResponse {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => ContentEntry.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryByAttestorResponse): JsonSafe<QueryByAttestorResponse> {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? ContentEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryByAttestorResponse>): QueryByAttestorResponse {
    const message = createBaseQueryByAttestorResponse();
    message.entries = object.entries?.map(e => ContentEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryByAttestorResponseSDKType): QueryByAttestorResponse {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => ContentEntry.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryByAttestorResponse): QueryByAttestorResponseSDKType {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? ContentEntry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryByAttestorResponseAmino): QueryByAttestorResponse {
    const message = createBaseQueryByAttestorResponse();
    message.entries = object.entries?.map(e => ContentEntry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryByAttestorResponse): QueryByAttestorResponseAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? ContentEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryByAttestorResponseAminoMsg): QueryByAttestorResponse {
    return QueryByAttestorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryByAttestorResponseProtoMsg): QueryByAttestorResponse {
    return QueryByAttestorResponse.decode(message.value);
  },
  toProto(message: QueryByAttestorResponse): Uint8Array {
    return QueryByAttestorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryByAttestorResponse): QueryByAttestorResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryByAttestorResponse",
      value: QueryByAttestorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIRIByHashRequest(): QueryIRIByHashRequest {
  return {
    contentHash: undefined
  };
}
export const QueryIRIByHashRequest = {
  typeUrl: "/regen.data.v1.QueryIRIByHashRequest",
  encode(message: QueryIRIByHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIRIByHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIRIByHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIRIByHashRequest {
    return {
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined
    };
  },
  toJSON(message: QueryIRIByHashRequest): JsonSafe<QueryIRIByHashRequest> {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIRIByHashRequest>): QueryIRIByHashRequest {
    const message = createBaseQueryIRIByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  },
  fromSDK(object: QueryIRIByHashRequestSDKType): QueryIRIByHashRequest {
    return {
      contentHash: object.content_hash ? ContentHash.fromSDK(object.content_hash) : undefined
    };
  },
  toSDK(message: QueryIRIByHashRequest): QueryIRIByHashRequestSDKType {
    const obj: any = {};
    message.contentHash !== undefined && (obj.content_hash = message.contentHash ? ContentHash.toSDK(message.contentHash) : undefined);
    return obj;
  },
  fromAmino(object: QueryIRIByHashRequestAmino): QueryIRIByHashRequest {
    const message = createBaseQueryIRIByHashRequest();
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = ContentHash.fromAmino(object.content_hash);
    }
    return message;
  },
  toAmino(message: QueryIRIByHashRequest): QueryIRIByHashRequestAmino {
    const obj: any = {};
    obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIRIByHashRequestAminoMsg): QueryIRIByHashRequest {
    return QueryIRIByHashRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIRIByHashRequestProtoMsg): QueryIRIByHashRequest {
    return QueryIRIByHashRequest.decode(message.value);
  },
  toProto(message: QueryIRIByHashRequest): Uint8Array {
    return QueryIRIByHashRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIRIByHashRequest): QueryIRIByHashRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryIRIByHashRequest",
      value: QueryIRIByHashRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIRIByHashResponse(): QueryIRIByHashResponse {
  return {
    iri: ""
  };
}
export const QueryIRIByHashResponse = {
  typeUrl: "/regen.data.v1.QueryIRIByHashResponse",
  encode(message: QueryIRIByHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIRIByHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIRIByHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIRIByHashResponse {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },
  toJSON(message: QueryIRIByHashResponse): JsonSafe<QueryIRIByHashResponse> {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIRIByHashResponse>): QueryIRIByHashResponse {
    const message = createBaseQueryIRIByHashResponse();
    message.iri = object.iri ?? "";
    return message;
  },
  fromSDK(object: QueryIRIByHashResponseSDKType): QueryIRIByHashResponse {
    return {
      iri: object?.iri
    };
  },
  toSDK(message: QueryIRIByHashResponse): QueryIRIByHashResponseSDKType {
    const obj: any = {};
    obj.iri = message.iri;
    return obj;
  },
  fromAmino(object: QueryIRIByHashResponseAmino): QueryIRIByHashResponse {
    const message = createBaseQueryIRIByHashResponse();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    return message;
  },
  toAmino(message: QueryIRIByHashResponse): QueryIRIByHashResponseAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    return obj;
  },
  fromAminoMsg(object: QueryIRIByHashResponseAminoMsg): QueryIRIByHashResponse {
    return QueryIRIByHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIRIByHashResponseProtoMsg): QueryIRIByHashResponse {
    return QueryIRIByHashResponse.decode(message.value);
  },
  toProto(message: QueryIRIByHashResponse): Uint8Array {
    return QueryIRIByHashResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIRIByHashResponse): QueryIRIByHashResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryIRIByHashResponse",
      value: QueryIRIByHashResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIRIByRawHashRequest(): QueryIRIByRawHashRequest {
  return {
    hash: "",
    digestAlgorithm: 0,
    mediaType: 0
  };
}
export const QueryIRIByRawHashRequest = {
  typeUrl: "/regen.data.v1.QueryIRIByRawHashRequest",
  encode(message: QueryIRIByRawHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.digestAlgorithm !== 0) {
      writer.uint32(16).int32(message.digestAlgorithm);
    }
    if (message.mediaType !== 0) {
      writer.uint32(24).int32(message.mediaType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIRIByRawHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIRIByRawHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.digestAlgorithm = (reader.int32() as any);
          break;
        case 3:
          message.mediaType = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIRIByRawHashRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      digestAlgorithm: isSet(object.digestAlgorithm) ? digestAlgorithmFromJSON(object.digestAlgorithm) : -1,
      mediaType: isSet(object.mediaType) ? rawMediaTypeFromJSON(object.mediaType) : -1
    };
  },
  toJSON(message: QueryIRIByRawHashRequest): JsonSafe<QueryIRIByRawHashRequest> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.digestAlgorithm !== undefined && (obj.digestAlgorithm = digestAlgorithmToJSON(message.digestAlgorithm));
    message.mediaType !== undefined && (obj.mediaType = rawMediaTypeToJSON(message.mediaType));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIRIByRawHashRequest>): QueryIRIByRawHashRequest {
    const message = createBaseQueryIRIByRawHashRequest();
    message.hash = object.hash ?? "";
    message.digestAlgorithm = object.digestAlgorithm ?? 0;
    message.mediaType = object.mediaType ?? 0;
    return message;
  },
  fromSDK(object: QueryIRIByRawHashRequestSDKType): QueryIRIByRawHashRequest {
    return {
      hash: object?.hash,
      digestAlgorithm: isSet(object.digest_algorithm) ? digestAlgorithmFromJSON(object.digest_algorithm) : -1,
      mediaType: isSet(object.media_type) ? rawMediaTypeFromJSON(object.media_type) : -1
    };
  },
  toSDK(message: QueryIRIByRawHashRequest): QueryIRIByRawHashRequestSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    message.digestAlgorithm !== undefined && (obj.digest_algorithm = digestAlgorithmToJSON(message.digestAlgorithm));
    message.mediaType !== undefined && (obj.media_type = rawMediaTypeToJSON(message.mediaType));
    return obj;
  },
  fromAmino(object: QueryIRIByRawHashRequestAmino): QueryIRIByRawHashRequest {
    const message = createBaseQueryIRIByRawHashRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.digest_algorithm !== undefined && object.digest_algorithm !== null) {
      message.digestAlgorithm = object.digest_algorithm;
    }
    if (object.media_type !== undefined && object.media_type !== null) {
      message.mediaType = object.media_type;
    }
    return message;
  },
  toAmino(message: QueryIRIByRawHashRequest): QueryIRIByRawHashRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.digest_algorithm = message.digestAlgorithm === 0 ? undefined : message.digestAlgorithm;
    obj.media_type = message.mediaType === 0 ? undefined : message.mediaType;
    return obj;
  },
  fromAminoMsg(object: QueryIRIByRawHashRequestAminoMsg): QueryIRIByRawHashRequest {
    return QueryIRIByRawHashRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIRIByRawHashRequestProtoMsg): QueryIRIByRawHashRequest {
    return QueryIRIByRawHashRequest.decode(message.value);
  },
  toProto(message: QueryIRIByRawHashRequest): Uint8Array {
    return QueryIRIByRawHashRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIRIByRawHashRequest): QueryIRIByRawHashRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryIRIByRawHashRequest",
      value: QueryIRIByRawHashRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIRIByRawHashResponse(): QueryIRIByRawHashResponse {
  return {
    iri: ""
  };
}
export const QueryIRIByRawHashResponse = {
  typeUrl: "/regen.data.v1.QueryIRIByRawHashResponse",
  encode(message: QueryIRIByRawHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIRIByRawHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIRIByRawHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIRIByRawHashResponse {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },
  toJSON(message: QueryIRIByRawHashResponse): JsonSafe<QueryIRIByRawHashResponse> {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIRIByRawHashResponse>): QueryIRIByRawHashResponse {
    const message = createBaseQueryIRIByRawHashResponse();
    message.iri = object.iri ?? "";
    return message;
  },
  fromSDK(object: QueryIRIByRawHashResponseSDKType): QueryIRIByRawHashResponse {
    return {
      iri: object?.iri
    };
  },
  toSDK(message: QueryIRIByRawHashResponse): QueryIRIByRawHashResponseSDKType {
    const obj: any = {};
    obj.iri = message.iri;
    return obj;
  },
  fromAmino(object: QueryIRIByRawHashResponseAmino): QueryIRIByRawHashResponse {
    const message = createBaseQueryIRIByRawHashResponse();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    return message;
  },
  toAmino(message: QueryIRIByRawHashResponse): QueryIRIByRawHashResponseAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    return obj;
  },
  fromAminoMsg(object: QueryIRIByRawHashResponseAminoMsg): QueryIRIByRawHashResponse {
    return QueryIRIByRawHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIRIByRawHashResponseProtoMsg): QueryIRIByRawHashResponse {
    return QueryIRIByRawHashResponse.decode(message.value);
  },
  toProto(message: QueryIRIByRawHashResponse): Uint8Array {
    return QueryIRIByRawHashResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIRIByRawHashResponse): QueryIRIByRawHashResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryIRIByRawHashResponse",
      value: QueryIRIByRawHashResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIRIByGraphHashRequest(): QueryIRIByGraphHashRequest {
  return {
    hash: "",
    digestAlgorithm: 0,
    canonicalizationAlgorithm: 0,
    merkleTree: 0
  };
}
export const QueryIRIByGraphHashRequest = {
  typeUrl: "/regen.data.v1.QueryIRIByGraphHashRequest",
  encode(message: QueryIRIByGraphHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.digestAlgorithm !== 0) {
      writer.uint32(16).int32(message.digestAlgorithm);
    }
    if (message.canonicalizationAlgorithm !== 0) {
      writer.uint32(24).int32(message.canonicalizationAlgorithm);
    }
    if (message.merkleTree !== 0) {
      writer.uint32(32).int32(message.merkleTree);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIRIByGraphHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIRIByGraphHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.digestAlgorithm = (reader.int32() as any);
          break;
        case 3:
          message.canonicalizationAlgorithm = (reader.int32() as any);
          break;
        case 4:
          message.merkleTree = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIRIByGraphHashRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      digestAlgorithm: isSet(object.digestAlgorithm) ? digestAlgorithmFromJSON(object.digestAlgorithm) : -1,
      canonicalizationAlgorithm: isSet(object.canonicalizationAlgorithm) ? graphCanonicalizationAlgorithmFromJSON(object.canonicalizationAlgorithm) : -1,
      merkleTree: isSet(object.merkleTree) ? graphMerkleTreeFromJSON(object.merkleTree) : -1
    };
  },
  toJSON(message: QueryIRIByGraphHashRequest): JsonSafe<QueryIRIByGraphHashRequest> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.digestAlgorithm !== undefined && (obj.digestAlgorithm = digestAlgorithmToJSON(message.digestAlgorithm));
    message.canonicalizationAlgorithm !== undefined && (obj.canonicalizationAlgorithm = graphCanonicalizationAlgorithmToJSON(message.canonicalizationAlgorithm));
    message.merkleTree !== undefined && (obj.merkleTree = graphMerkleTreeToJSON(message.merkleTree));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIRIByGraphHashRequest>): QueryIRIByGraphHashRequest {
    const message = createBaseQueryIRIByGraphHashRequest();
    message.hash = object.hash ?? "";
    message.digestAlgorithm = object.digestAlgorithm ?? 0;
    message.canonicalizationAlgorithm = object.canonicalizationAlgorithm ?? 0;
    message.merkleTree = object.merkleTree ?? 0;
    return message;
  },
  fromSDK(object: QueryIRIByGraphHashRequestSDKType): QueryIRIByGraphHashRequest {
    return {
      hash: object?.hash,
      digestAlgorithm: isSet(object.digest_algorithm) ? digestAlgorithmFromJSON(object.digest_algorithm) : -1,
      canonicalizationAlgorithm: isSet(object.canonicalization_algorithm) ? graphCanonicalizationAlgorithmFromJSON(object.canonicalization_algorithm) : -1,
      merkleTree: isSet(object.merkle_tree) ? graphMerkleTreeFromJSON(object.merkle_tree) : -1
    };
  },
  toSDK(message: QueryIRIByGraphHashRequest): QueryIRIByGraphHashRequestSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    message.digestAlgorithm !== undefined && (obj.digest_algorithm = digestAlgorithmToJSON(message.digestAlgorithm));
    message.canonicalizationAlgorithm !== undefined && (obj.canonicalization_algorithm = graphCanonicalizationAlgorithmToJSON(message.canonicalizationAlgorithm));
    message.merkleTree !== undefined && (obj.merkle_tree = graphMerkleTreeToJSON(message.merkleTree));
    return obj;
  },
  fromAmino(object: QueryIRIByGraphHashRequestAmino): QueryIRIByGraphHashRequest {
    const message = createBaseQueryIRIByGraphHashRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.digest_algorithm !== undefined && object.digest_algorithm !== null) {
      message.digestAlgorithm = object.digest_algorithm;
    }
    if (object.canonicalization_algorithm !== undefined && object.canonicalization_algorithm !== null) {
      message.canonicalizationAlgorithm = object.canonicalization_algorithm;
    }
    if (object.merkle_tree !== undefined && object.merkle_tree !== null) {
      message.merkleTree = object.merkle_tree;
    }
    return message;
  },
  toAmino(message: QueryIRIByGraphHashRequest): QueryIRIByGraphHashRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.digest_algorithm = message.digestAlgorithm === 0 ? undefined : message.digestAlgorithm;
    obj.canonicalization_algorithm = message.canonicalizationAlgorithm === 0 ? undefined : message.canonicalizationAlgorithm;
    obj.merkle_tree = message.merkleTree === 0 ? undefined : message.merkleTree;
    return obj;
  },
  fromAminoMsg(object: QueryIRIByGraphHashRequestAminoMsg): QueryIRIByGraphHashRequest {
    return QueryIRIByGraphHashRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIRIByGraphHashRequestProtoMsg): QueryIRIByGraphHashRequest {
    return QueryIRIByGraphHashRequest.decode(message.value);
  },
  toProto(message: QueryIRIByGraphHashRequest): Uint8Array {
    return QueryIRIByGraphHashRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIRIByGraphHashRequest): QueryIRIByGraphHashRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryIRIByGraphHashRequest",
      value: QueryIRIByGraphHashRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIRIByGraphHashResponse(): QueryIRIByGraphHashResponse {
  return {
    iri: ""
  };
}
export const QueryIRIByGraphHashResponse = {
  typeUrl: "/regen.data.v1.QueryIRIByGraphHashResponse",
  encode(message: QueryIRIByGraphHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIRIByGraphHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIRIByGraphHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIRIByGraphHashResponse {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },
  toJSON(message: QueryIRIByGraphHashResponse): JsonSafe<QueryIRIByGraphHashResponse> {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIRIByGraphHashResponse>): QueryIRIByGraphHashResponse {
    const message = createBaseQueryIRIByGraphHashResponse();
    message.iri = object.iri ?? "";
    return message;
  },
  fromSDK(object: QueryIRIByGraphHashResponseSDKType): QueryIRIByGraphHashResponse {
    return {
      iri: object?.iri
    };
  },
  toSDK(message: QueryIRIByGraphHashResponse): QueryIRIByGraphHashResponseSDKType {
    const obj: any = {};
    obj.iri = message.iri;
    return obj;
  },
  fromAmino(object: QueryIRIByGraphHashResponseAmino): QueryIRIByGraphHashResponse {
    const message = createBaseQueryIRIByGraphHashResponse();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    return message;
  },
  toAmino(message: QueryIRIByGraphHashResponse): QueryIRIByGraphHashResponseAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    return obj;
  },
  fromAminoMsg(object: QueryIRIByGraphHashResponseAminoMsg): QueryIRIByGraphHashResponse {
    return QueryIRIByGraphHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIRIByGraphHashResponseProtoMsg): QueryIRIByGraphHashResponse {
    return QueryIRIByGraphHashResponse.decode(message.value);
  },
  toProto(message: QueryIRIByGraphHashResponse): Uint8Array {
    return QueryIRIByGraphHashResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIRIByGraphHashResponse): QueryIRIByGraphHashResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryIRIByGraphHashResponse",
      value: QueryIRIByGraphHashResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHashByIRIRequest(): QueryHashByIRIRequest {
  return {
    iri: ""
  };
}
export const QueryHashByIRIRequest = {
  typeUrl: "/regen.data.v1.QueryHashByIRIRequest",
  encode(message: QueryHashByIRIRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHashByIRIRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHashByIRIRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHashByIRIRequest {
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },
  toJSON(message: QueryHashByIRIRequest): JsonSafe<QueryHashByIRIRequest> {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryHashByIRIRequest>): QueryHashByIRIRequest {
    const message = createBaseQueryHashByIRIRequest();
    message.iri = object.iri ?? "";
    return message;
  },
  fromSDK(object: QueryHashByIRIRequestSDKType): QueryHashByIRIRequest {
    return {
      iri: object?.iri
    };
  },
  toSDK(message: QueryHashByIRIRequest): QueryHashByIRIRequestSDKType {
    const obj: any = {};
    obj.iri = message.iri;
    return obj;
  },
  fromAmino(object: QueryHashByIRIRequestAmino): QueryHashByIRIRequest {
    const message = createBaseQueryHashByIRIRequest();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    return message;
  },
  toAmino(message: QueryHashByIRIRequest): QueryHashByIRIRequestAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    return obj;
  },
  fromAminoMsg(object: QueryHashByIRIRequestAminoMsg): QueryHashByIRIRequest {
    return QueryHashByIRIRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHashByIRIRequestProtoMsg): QueryHashByIRIRequest {
    return QueryHashByIRIRequest.decode(message.value);
  },
  toProto(message: QueryHashByIRIRequest): Uint8Array {
    return QueryHashByIRIRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHashByIRIRequest): QueryHashByIRIRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryHashByIRIRequest",
      value: QueryHashByIRIRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHashByIRIResponse(): QueryHashByIRIResponse {
  return {
    contentHash: undefined
  };
}
export const QueryHashByIRIResponse = {
  typeUrl: "/regen.data.v1.QueryHashByIRIResponse",
  encode(message: QueryHashByIRIResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHashByIRIResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHashByIRIResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHashByIRIResponse {
    return {
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined
    };
  },
  toJSON(message: QueryHashByIRIResponse): JsonSafe<QueryHashByIRIResponse> {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryHashByIRIResponse>): QueryHashByIRIResponse {
    const message = createBaseQueryHashByIRIResponse();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    return message;
  },
  fromSDK(object: QueryHashByIRIResponseSDKType): QueryHashByIRIResponse {
    return {
      contentHash: object.content_hash ? ContentHash.fromSDK(object.content_hash) : undefined
    };
  },
  toSDK(message: QueryHashByIRIResponse): QueryHashByIRIResponseSDKType {
    const obj: any = {};
    message.contentHash !== undefined && (obj.content_hash = message.contentHash ? ContentHash.toSDK(message.contentHash) : undefined);
    return obj;
  },
  fromAmino(object: QueryHashByIRIResponseAmino): QueryHashByIRIResponse {
    const message = createBaseQueryHashByIRIResponse();
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = ContentHash.fromAmino(object.content_hash);
    }
    return message;
  },
  toAmino(message: QueryHashByIRIResponse): QueryHashByIRIResponseAmino {
    const obj: any = {};
    obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHashByIRIResponseAminoMsg): QueryHashByIRIResponse {
    return QueryHashByIRIResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHashByIRIResponseProtoMsg): QueryHashByIRIResponse {
    return QueryHashByIRIResponse.decode(message.value);
  },
  toProto(message: QueryHashByIRIResponse): Uint8Array {
    return QueryHashByIRIResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHashByIRIResponse): QueryHashByIRIResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryHashByIRIResponse",
      value: QueryHashByIRIResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAttestorsByIRIRequest(): QueryAttestorsByIRIRequest {
  return {
    iri: "",
    pagination: undefined
  };
}
export const QueryAttestorsByIRIRequest = {
  typeUrl: "/regen.data.v1.QueryAttestorsByIRIRequest",
  encode(message: QueryAttestorsByIRIRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestorsByIRIRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestorsByIRIRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAttestorsByIRIRequest {
    return {
      iri: isSet(object.iri) ? String(object.iri) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAttestorsByIRIRequest): JsonSafe<QueryAttestorsByIRIRequest> {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAttestorsByIRIRequest>): QueryAttestorsByIRIRequest {
    const message = createBaseQueryAttestorsByIRIRequest();
    message.iri = object.iri ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAttestorsByIRIRequestSDKType): QueryAttestorsByIRIRequest {
    return {
      iri: object?.iri,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAttestorsByIRIRequest): QueryAttestorsByIRIRequestSDKType {
    const obj: any = {};
    obj.iri = message.iri;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAttestorsByIRIRequestAmino): QueryAttestorsByIRIRequest {
    const message = createBaseQueryAttestorsByIRIRequest();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAttestorsByIRIRequest): QueryAttestorsByIRIRequestAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAttestorsByIRIRequestAminoMsg): QueryAttestorsByIRIRequest {
    return QueryAttestorsByIRIRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAttestorsByIRIRequestProtoMsg): QueryAttestorsByIRIRequest {
    return QueryAttestorsByIRIRequest.decode(message.value);
  },
  toProto(message: QueryAttestorsByIRIRequest): Uint8Array {
    return QueryAttestorsByIRIRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAttestorsByIRIRequest): QueryAttestorsByIRIRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAttestorsByIRIRequest",
      value: QueryAttestorsByIRIRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAttestorsByIRIResponse(): QueryAttestorsByIRIResponse {
  return {
    attestors: [],
    pagination: undefined
  };
}
export const QueryAttestorsByIRIResponse = {
  typeUrl: "/regen.data.v1.QueryAttestorsByIRIResponse",
  encode(message: QueryAttestorsByIRIResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.attestors) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestorsByIRIResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestorsByIRIResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestors.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAttestorsByIRIResponse {
    return {
      attestors: Array.isArray(object?.attestors) ? object.attestors.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAttestorsByIRIResponse): JsonSafe<QueryAttestorsByIRIResponse> {
    const obj: any = {};
    if (message.attestors) {
      obj.attestors = message.attestors.map(e => e);
    } else {
      obj.attestors = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAttestorsByIRIResponse>): QueryAttestorsByIRIResponse {
    const message = createBaseQueryAttestorsByIRIResponse();
    message.attestors = object.attestors?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAttestorsByIRIResponseSDKType): QueryAttestorsByIRIResponse {
    return {
      attestors: Array.isArray(object?.attestors) ? object.attestors.map((e: any) => e) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAttestorsByIRIResponse): QueryAttestorsByIRIResponseSDKType {
    const obj: any = {};
    if (message.attestors) {
      obj.attestors = message.attestors.map(e => e);
    } else {
      obj.attestors = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAttestorsByIRIResponseAmino): QueryAttestorsByIRIResponse {
    const message = createBaseQueryAttestorsByIRIResponse();
    message.attestors = object.attestors?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAttestorsByIRIResponse): QueryAttestorsByIRIResponseAmino {
    const obj: any = {};
    if (message.attestors) {
      obj.attestors = message.attestors.map(e => e);
    } else {
      obj.attestors = message.attestors;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAttestorsByIRIResponseAminoMsg): QueryAttestorsByIRIResponse {
    return QueryAttestorsByIRIResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAttestorsByIRIResponseProtoMsg): QueryAttestorsByIRIResponse {
    return QueryAttestorsByIRIResponse.decode(message.value);
  },
  toProto(message: QueryAttestorsByIRIResponse): Uint8Array {
    return QueryAttestorsByIRIResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAttestorsByIRIResponse): QueryAttestorsByIRIResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAttestorsByIRIResponse",
      value: QueryAttestorsByIRIResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAttestorsByHashRequest(): QueryAttestorsByHashRequest {
  return {
    contentHash: undefined,
    pagination: undefined
  };
}
export const QueryAttestorsByHashRequest = {
  typeUrl: "/regen.data.v1.QueryAttestorsByHashRequest",
  encode(message: QueryAttestorsByHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestorsByHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestorsByHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAttestorsByHashRequest {
    return {
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAttestorsByHashRequest): JsonSafe<QueryAttestorsByHashRequest> {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAttestorsByHashRequest>): QueryAttestorsByHashRequest {
    const message = createBaseQueryAttestorsByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAttestorsByHashRequestSDKType): QueryAttestorsByHashRequest {
    return {
      contentHash: object.content_hash ? ContentHash.fromSDK(object.content_hash) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAttestorsByHashRequest): QueryAttestorsByHashRequestSDKType {
    const obj: any = {};
    message.contentHash !== undefined && (obj.content_hash = message.contentHash ? ContentHash.toSDK(message.contentHash) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAttestorsByHashRequestAmino): QueryAttestorsByHashRequest {
    const message = createBaseQueryAttestorsByHashRequest();
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = ContentHash.fromAmino(object.content_hash);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAttestorsByHashRequest): QueryAttestorsByHashRequestAmino {
    const obj: any = {};
    obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAttestorsByHashRequestAminoMsg): QueryAttestorsByHashRequest {
    return QueryAttestorsByHashRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAttestorsByHashRequestProtoMsg): QueryAttestorsByHashRequest {
    return QueryAttestorsByHashRequest.decode(message.value);
  },
  toProto(message: QueryAttestorsByHashRequest): Uint8Array {
    return QueryAttestorsByHashRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAttestorsByHashRequest): QueryAttestorsByHashRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAttestorsByHashRequest",
      value: QueryAttestorsByHashRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAttestorsByHashResponse(): QueryAttestorsByHashResponse {
  return {
    attestors: [],
    pagination: undefined
  };
}
export const QueryAttestorsByHashResponse = {
  typeUrl: "/regen.data.v1.QueryAttestorsByHashResponse",
  encode(message: QueryAttestorsByHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.attestors) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAttestorsByHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestorsByHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestors.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAttestorsByHashResponse {
    return {
      attestors: Array.isArray(object?.attestors) ? object.attestors.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAttestorsByHashResponse): JsonSafe<QueryAttestorsByHashResponse> {
    const obj: any = {};
    if (message.attestors) {
      obj.attestors = message.attestors.map(e => e);
    } else {
      obj.attestors = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAttestorsByHashResponse>): QueryAttestorsByHashResponse {
    const message = createBaseQueryAttestorsByHashResponse();
    message.attestors = object.attestors?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAttestorsByHashResponseSDKType): QueryAttestorsByHashResponse {
    return {
      attestors: Array.isArray(object?.attestors) ? object.attestors.map((e: any) => e) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAttestorsByHashResponse): QueryAttestorsByHashResponseSDKType {
    const obj: any = {};
    if (message.attestors) {
      obj.attestors = message.attestors.map(e => e);
    } else {
      obj.attestors = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAttestorsByHashResponseAmino): QueryAttestorsByHashResponse {
    const message = createBaseQueryAttestorsByHashResponse();
    message.attestors = object.attestors?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAttestorsByHashResponse): QueryAttestorsByHashResponseAmino {
    const obj: any = {};
    if (message.attestors) {
      obj.attestors = message.attestors.map(e => e);
    } else {
      obj.attestors = message.attestors;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAttestorsByHashResponseAminoMsg): QueryAttestorsByHashResponse {
    return QueryAttestorsByHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAttestorsByHashResponseProtoMsg): QueryAttestorsByHashResponse {
    return QueryAttestorsByHashResponse.decode(message.value);
  },
  toProto(message: QueryAttestorsByHashResponse): Uint8Array {
    return QueryAttestorsByHashResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAttestorsByHashResponse): QueryAttestorsByHashResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryAttestorsByHashResponse",
      value: QueryAttestorsByHashResponse.encode(message).finish()
    };
  }
};
function createBaseQueryResolversByIRIRequest(): QueryResolversByIRIRequest {
  return {
    iri: "",
    pagination: undefined
  };
}
export const QueryResolversByIRIRequest = {
  typeUrl: "/regen.data.v1.QueryResolversByIRIRequest",
  encode(message: QueryResolversByIRIRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByIRIRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByIRIRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryResolversByIRIRequest {
    return {
      iri: isSet(object.iri) ? String(object.iri) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryResolversByIRIRequest): JsonSafe<QueryResolversByIRIRequest> {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryResolversByIRIRequest>): QueryResolversByIRIRequest {
    const message = createBaseQueryResolversByIRIRequest();
    message.iri = object.iri ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryResolversByIRIRequestSDKType): QueryResolversByIRIRequest {
    return {
      iri: object?.iri,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryResolversByIRIRequest): QueryResolversByIRIRequestSDKType {
    const obj: any = {};
    obj.iri = message.iri;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryResolversByIRIRequestAmino): QueryResolversByIRIRequest {
    const message = createBaseQueryResolversByIRIRequest();
    if (object.iri !== undefined && object.iri !== null) {
      message.iri = object.iri;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryResolversByIRIRequest): QueryResolversByIRIRequestAmino {
    const obj: any = {};
    obj.iri = message.iri === "" ? undefined : message.iri;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryResolversByIRIRequestAminoMsg): QueryResolversByIRIRequest {
    return QueryResolversByIRIRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResolversByIRIRequestProtoMsg): QueryResolversByIRIRequest {
    return QueryResolversByIRIRequest.decode(message.value);
  },
  toProto(message: QueryResolversByIRIRequest): Uint8Array {
    return QueryResolversByIRIRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryResolversByIRIRequest): QueryResolversByIRIRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolversByIRIRequest",
      value: QueryResolversByIRIRequest.encode(message).finish()
    };
  }
};
function createBaseQueryResolversByIRIResponse(): QueryResolversByIRIResponse {
  return {
    resolverUrls: [],
    pagination: undefined
  };
}
export const QueryResolversByIRIResponse = {
  typeUrl: "/regen.data.v1.QueryResolversByIRIResponse",
  encode(message: QueryResolversByIRIResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.resolverUrls) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByIRIResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByIRIResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resolverUrls.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryResolversByIRIResponse {
    return {
      resolverUrls: Array.isArray(object?.resolverUrls) ? object.resolverUrls.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryResolversByIRIResponse): JsonSafe<QueryResolversByIRIResponse> {
    const obj: any = {};
    if (message.resolverUrls) {
      obj.resolverUrls = message.resolverUrls.map(e => e);
    } else {
      obj.resolverUrls = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryResolversByIRIResponse>): QueryResolversByIRIResponse {
    const message = createBaseQueryResolversByIRIResponse();
    message.resolverUrls = object.resolverUrls?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryResolversByIRIResponseSDKType): QueryResolversByIRIResponse {
    return {
      resolverUrls: Array.isArray(object?.resolver_urls) ? object.resolver_urls.map((e: any) => e) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryResolversByIRIResponse): QueryResolversByIRIResponseSDKType {
    const obj: any = {};
    if (message.resolverUrls) {
      obj.resolver_urls = message.resolverUrls.map(e => e);
    } else {
      obj.resolver_urls = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryResolversByIRIResponseAmino): QueryResolversByIRIResponse {
    const message = createBaseQueryResolversByIRIResponse();
    message.resolverUrls = object.resolver_urls?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryResolversByIRIResponse): QueryResolversByIRIResponseAmino {
    const obj: any = {};
    if (message.resolverUrls) {
      obj.resolver_urls = message.resolverUrls.map(e => e);
    } else {
      obj.resolver_urls = message.resolverUrls;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryResolversByIRIResponseAminoMsg): QueryResolversByIRIResponse {
    return QueryResolversByIRIResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResolversByIRIResponseProtoMsg): QueryResolversByIRIResponse {
    return QueryResolversByIRIResponse.decode(message.value);
  },
  toProto(message: QueryResolversByIRIResponse): Uint8Array {
    return QueryResolversByIRIResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryResolversByIRIResponse): QueryResolversByIRIResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolversByIRIResponse",
      value: QueryResolversByIRIResponse.encode(message).finish()
    };
  }
};
function createBaseQueryResolversByHashRequest(): QueryResolversByHashRequest {
  return {
    contentHash: undefined,
    pagination: undefined
  };
}
export const QueryResolversByHashRequest = {
  typeUrl: "/regen.data.v1.QueryResolversByHashRequest",
  encode(message: QueryResolversByHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contentHash !== undefined) {
      ContentHash.encode(message.contentHash, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentHash = ContentHash.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryResolversByHashRequest {
    return {
      contentHash: isSet(object.contentHash) ? ContentHash.fromJSON(object.contentHash) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryResolversByHashRequest): JsonSafe<QueryResolversByHashRequest> {
    const obj: any = {};
    message.contentHash !== undefined && (obj.contentHash = message.contentHash ? ContentHash.toJSON(message.contentHash) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryResolversByHashRequest>): QueryResolversByHashRequest {
    const message = createBaseQueryResolversByHashRequest();
    message.contentHash = object.contentHash !== undefined && object.contentHash !== null ? ContentHash.fromPartial(object.contentHash) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryResolversByHashRequestSDKType): QueryResolversByHashRequest {
    return {
      contentHash: object.content_hash ? ContentHash.fromSDK(object.content_hash) : undefined,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryResolversByHashRequest): QueryResolversByHashRequestSDKType {
    const obj: any = {};
    message.contentHash !== undefined && (obj.content_hash = message.contentHash ? ContentHash.toSDK(message.contentHash) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryResolversByHashRequestAmino): QueryResolversByHashRequest {
    const message = createBaseQueryResolversByHashRequest();
    if (object.content_hash !== undefined && object.content_hash !== null) {
      message.contentHash = ContentHash.fromAmino(object.content_hash);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryResolversByHashRequest): QueryResolversByHashRequestAmino {
    const obj: any = {};
    obj.content_hash = message.contentHash ? ContentHash.toAmino(message.contentHash) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryResolversByHashRequestAminoMsg): QueryResolversByHashRequest {
    return QueryResolversByHashRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResolversByHashRequestProtoMsg): QueryResolversByHashRequest {
    return QueryResolversByHashRequest.decode(message.value);
  },
  toProto(message: QueryResolversByHashRequest): Uint8Array {
    return QueryResolversByHashRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryResolversByHashRequest): QueryResolversByHashRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolversByHashRequest",
      value: QueryResolversByHashRequest.encode(message).finish()
    };
  }
};
function createBaseQueryResolversByHashResponse(): QueryResolversByHashResponse {
  return {
    resolverUrls: [],
    pagination: undefined
  };
}
export const QueryResolversByHashResponse = {
  typeUrl: "/regen.data.v1.QueryResolversByHashResponse",
  encode(message: QueryResolversByHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.resolverUrls) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolversByHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolversByHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resolverUrls.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryResolversByHashResponse {
    return {
      resolverUrls: Array.isArray(object?.resolverUrls) ? object.resolverUrls.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryResolversByHashResponse): JsonSafe<QueryResolversByHashResponse> {
    const obj: any = {};
    if (message.resolverUrls) {
      obj.resolverUrls = message.resolverUrls.map(e => e);
    } else {
      obj.resolverUrls = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryResolversByHashResponse>): QueryResolversByHashResponse {
    const message = createBaseQueryResolversByHashResponse();
    message.resolverUrls = object.resolverUrls?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryResolversByHashResponseSDKType): QueryResolversByHashResponse {
    return {
      resolverUrls: Array.isArray(object?.resolver_urls) ? object.resolver_urls.map((e: any) => e) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryResolversByHashResponse): QueryResolversByHashResponseSDKType {
    const obj: any = {};
    if (message.resolverUrls) {
      obj.resolver_urls = message.resolverUrls.map(e => e);
    } else {
      obj.resolver_urls = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryResolversByHashResponseAmino): QueryResolversByHashResponse {
    const message = createBaseQueryResolversByHashResponse();
    message.resolverUrls = object.resolver_urls?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryResolversByHashResponse): QueryResolversByHashResponseAmino {
    const obj: any = {};
    if (message.resolverUrls) {
      obj.resolver_urls = message.resolverUrls.map(e => e);
    } else {
      obj.resolver_urls = message.resolverUrls;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryResolversByHashResponseAminoMsg): QueryResolversByHashResponse {
    return QueryResolversByHashResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResolversByHashResponseProtoMsg): QueryResolversByHashResponse {
    return QueryResolversByHashResponse.decode(message.value);
  },
  toProto(message: QueryResolversByHashResponse): Uint8Array {
    return QueryResolversByHashResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryResolversByHashResponse): QueryResolversByHashResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolversByHashResponse",
      value: QueryResolversByHashResponse.encode(message).finish()
    };
  }
};
function createBaseQueryResolverInfoRequest(): QueryResolverInfoRequest {
  return {
    url: ""
  };
}
export const QueryResolverInfoRequest = {
  typeUrl: "/regen.data.v1.QueryResolverInfoRequest",
  encode(message: QueryResolverInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolverInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolverInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryResolverInfoRequest {
    return {
      url: isSet(object.url) ? String(object.url) : ""
    };
  },
  toJSON(message: QueryResolverInfoRequest): JsonSafe<QueryResolverInfoRequest> {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryResolverInfoRequest>): QueryResolverInfoRequest {
    const message = createBaseQueryResolverInfoRequest();
    message.url = object.url ?? "";
    return message;
  },
  fromSDK(object: QueryResolverInfoRequestSDKType): QueryResolverInfoRequest {
    return {
      url: object?.url
    };
  },
  toSDK(message: QueryResolverInfoRequest): QueryResolverInfoRequestSDKType {
    const obj: any = {};
    obj.url = message.url;
    return obj;
  },
  fromAmino(object: QueryResolverInfoRequestAmino): QueryResolverInfoRequest {
    const message = createBaseQueryResolverInfoRequest();
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    return message;
  },
  toAmino(message: QueryResolverInfoRequest): QueryResolverInfoRequestAmino {
    const obj: any = {};
    obj.url = message.url === "" ? undefined : message.url;
    return obj;
  },
  fromAminoMsg(object: QueryResolverInfoRequestAminoMsg): QueryResolverInfoRequest {
    return QueryResolverInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResolverInfoRequestProtoMsg): QueryResolverInfoRequest {
    return QueryResolverInfoRequest.decode(message.value);
  },
  toProto(message: QueryResolverInfoRequest): Uint8Array {
    return QueryResolverInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryResolverInfoRequest): QueryResolverInfoRequestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolverInfoRequest",
      value: QueryResolverInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryResolverInfoResponse(): QueryResolverInfoResponse {
  return {
    id: BigInt(0),
    manager: ""
  };
}
export const QueryResolverInfoResponse = {
  typeUrl: "/regen.data.v1.QueryResolverInfoResponse",
  encode(message: QueryResolverInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.manager !== "") {
      writer.uint32(18).string(message.manager);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResolverInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolverInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.manager = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryResolverInfoResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      manager: isSet(object.manager) ? String(object.manager) : ""
    };
  },
  toJSON(message: QueryResolverInfoResponse): JsonSafe<QueryResolverInfoResponse> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.manager !== undefined && (obj.manager = message.manager);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryResolverInfoResponse>): QueryResolverInfoResponse {
    const message = createBaseQueryResolverInfoResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.manager = object.manager ?? "";
    return message;
  },
  fromSDK(object: QueryResolverInfoResponseSDKType): QueryResolverInfoResponse {
    return {
      id: object?.id,
      manager: object?.manager
    };
  },
  toSDK(message: QueryResolverInfoResponse): QueryResolverInfoResponseSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.manager = message.manager;
    return obj;
  },
  fromAmino(object: QueryResolverInfoResponseAmino): QueryResolverInfoResponse {
    const message = createBaseQueryResolverInfoResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.manager !== undefined && object.manager !== null) {
      message.manager = object.manager;
    }
    return message;
  },
  toAmino(message: QueryResolverInfoResponse): QueryResolverInfoResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.manager = message.manager === "" ? undefined : message.manager;
    return obj;
  },
  fromAminoMsg(object: QueryResolverInfoResponseAminoMsg): QueryResolverInfoResponse {
    return QueryResolverInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResolverInfoResponseProtoMsg): QueryResolverInfoResponse {
    return QueryResolverInfoResponse.decode(message.value);
  },
  toProto(message: QueryResolverInfoResponse): Uint8Array {
    return QueryResolverInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryResolverInfoResponse): QueryResolverInfoResponseProtoMsg {
    return {
      typeUrl: "/regen.data.v1.QueryResolverInfoResponse",
      value: QueryResolverInfoResponse.encode(message).finish()
    };
  }
};