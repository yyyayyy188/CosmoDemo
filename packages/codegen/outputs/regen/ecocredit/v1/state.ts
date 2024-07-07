import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditType {
  /**
   * abbreviation is a 1-3 character uppercase abbreviation of the CreditType
   * name, used in batch denominations within the CreditType. It must be unique.
   */
  abbreviation: string;
  /** name is the name of the credit type (e.g. carbon, biodiversity). */
  name: string;
  /** unit is the measurement unit of the credit type (e.g. kg, ton). */
  unit: string;
  /** precision is the decimal precision of the credit type. */
  precision: number;
}
export interface CreditTypeProtoMsg {
  typeUrl: "/regen.ecocredit.v1.CreditType";
  value: Uint8Array;
}
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditTypeAmino {
  /**
   * abbreviation is a 1-3 character uppercase abbreviation of the CreditType
   * name, used in batch denominations within the CreditType. It must be unique.
   */
  abbreviation?: string;
  /** name is the name of the credit type (e.g. carbon, biodiversity). */
  name?: string;
  /** unit is the measurement unit of the credit type (e.g. kg, ton). */
  unit?: string;
  /** precision is the decimal precision of the credit type. */
  precision?: number;
}
export interface CreditTypeAminoMsg {
  type: "/regen.ecocredit.v1.CreditType";
  value: CreditTypeAmino;
}
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditTypeSDKType {
  abbreviation: string;
  name: string;
  unit: string;
  precision: number;
}
/** Class represents the high-level on-chain information for a credit class. */
export interface Class {
  /**
   * key is the table row identifier of the credit class used internally for
   * efficient lookups. This identifier is auto-incrementing.
   */
  key: bigint;
  /**
   * id is the unique identifier of the credit class auto-generated from the
   * credit type abbreviation and the credit class sequence number.
   */
  id: string;
  /** admin is the admin of the credit class. */
  admin: Uint8Array;
  /** metadata is any arbitrary metadata to attached to the credit class. */
  metadata: string;
  /** credit_type_abbrev is the abbreviation of the credit type. */
  creditTypeAbbrev: string;
}
export interface ClassProtoMsg {
  typeUrl: "/regen.ecocredit.v1.Class";
  value: Uint8Array;
}
/** Class represents the high-level on-chain information for a credit class. */
export interface ClassAmino {
  /**
   * key is the table row identifier of the credit class used internally for
   * efficient lookups. This identifier is auto-incrementing.
   */
  key?: string;
  /**
   * id is the unique identifier of the credit class auto-generated from the
   * credit type abbreviation and the credit class sequence number.
   */
  id?: string;
  /** admin is the admin of the credit class. */
  admin?: string;
  /** metadata is any arbitrary metadata to attached to the credit class. */
  metadata?: string;
  /** credit_type_abbrev is the abbreviation of the credit type. */
  credit_type_abbrev?: string;
}
export interface ClassAminoMsg {
  type: "/regen.ecocredit.v1.Class";
  value: ClassAmino;
}
/** Class represents the high-level on-chain information for a credit class. */
export interface ClassSDKType {
  key: bigint;
  id: string;
  admin: Uint8Array;
  metadata: string;
  credit_type_abbrev: string;
}
/**
 * ClassIssuers is a JOIN table for Class Info that stores the credit class
 * issuers
 */
export interface ClassIssuer {
  /**
   * class_key is the table row identifier of the credit class used internally
   * for efficient lookups. This links a class issuer to a credit class.
   */
  classKey: bigint;
  /** issuer is the approved issuer of the credit class. */
  issuer: Uint8Array;
}
export interface ClassIssuerProtoMsg {
  typeUrl: "/regen.ecocredit.v1.ClassIssuer";
  value: Uint8Array;
}
/**
 * ClassIssuers is a JOIN table for Class Info that stores the credit class
 * issuers
 */
export interface ClassIssuerAmino {
  /**
   * class_key is the table row identifier of the credit class used internally
   * for efficient lookups. This links a class issuer to a credit class.
   */
  class_key?: string;
  /** issuer is the approved issuer of the credit class. */
  issuer?: string;
}
export interface ClassIssuerAminoMsg {
  type: "/regen.ecocredit.v1.ClassIssuer";
  value: ClassIssuerAmino;
}
/**
 * ClassIssuers is a JOIN table for Class Info that stores the credit class
 * issuers
 */
export interface ClassIssuerSDKType {
  class_key: bigint;
  issuer: Uint8Array;
}
/** Project represents the high-level on-chain information for a project. */
export interface Project {
  /**
   * key is the table row identifier of the project used internally for
   * efficient lookups. This identifier is auto-incrementing.
   */
  key: bigint;
  /**
   * id is the unique identifier of the project either auto-generated from the
   * credit class id and project sequence number or provided upon creation.
   */
  id: string;
  /** admin is the admin of the project. */
  admin: Uint8Array;
  /**
   * class_key is the table row identifier of the credit class used internally
   * for efficient lookups. This links a project to a credit class.
   */
  classKey: bigint;
  /**
   * jurisdiction is the jurisdiction of the project.
   * Full documentation can be found in MsgCreateProject.jurisdiction.
   */
  jurisdiction: string;
  /** metadata is any arbitrary metadata attached to the project. */
  metadata: string;
  /** reference_id is any arbitrary string used to reference the project. */
  referenceId: string;
}
export interface ProjectProtoMsg {
  typeUrl: "/regen.ecocredit.v1.Project";
  value: Uint8Array;
}
/** Project represents the high-level on-chain information for a project. */
export interface ProjectAmino {
  /**
   * key is the table row identifier of the project used internally for
   * efficient lookups. This identifier is auto-incrementing.
   */
  key?: string;
  /**
   * id is the unique identifier of the project either auto-generated from the
   * credit class id and project sequence number or provided upon creation.
   */
  id?: string;
  /** admin is the admin of the project. */
  admin?: string;
  /**
   * class_key is the table row identifier of the credit class used internally
   * for efficient lookups. This links a project to a credit class.
   */
  class_key?: string;
  /**
   * jurisdiction is the jurisdiction of the project.
   * Full documentation can be found in MsgCreateProject.jurisdiction.
   */
  jurisdiction?: string;
  /** metadata is any arbitrary metadata attached to the project. */
  metadata?: string;
  /** reference_id is any arbitrary string used to reference the project. */
  reference_id?: string;
}
export interface ProjectAminoMsg {
  type: "/regen.ecocredit.v1.Project";
  value: ProjectAmino;
}
/** Project represents the high-level on-chain information for a project. */
export interface ProjectSDKType {
  key: bigint;
  id: string;
  admin: Uint8Array;
  class_key: bigint;
  jurisdiction: string;
  metadata: string;
  reference_id: string;
}
/** Batch represents the high-level on-chain information for a credit batch. */
export interface Batch {
  /**
   * key is the table row identifier of the credit batch used internally for
   * efficient lookups. This identifier is auto-incrementing.
   */
  key: bigint;
  /**
   * issuer is the address that created the batch and which is
   * authorized to mint more credits if open=true.
   */
  issuer: Uint8Array;
  /**
   * project_key is the table row identifier of the credit class used internally
   * for efficient lookups. This links a credit batch to a project.
   */
  projectKey: bigint;
  /**
   * denom is the unique identifier of the credit batch formed from the
   * project id, the batch sequence number, and the start and end date of the
   * credit batch.
   */
  denom: string;
  /** metadata is any arbitrary metadata attached to the credit batch. */
  metadata: string;
  /**
   * start_date is the beginning of the period during which this credit batch
   * was quantified and verified.
   */
  startDate?: Date | undefined;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  endDate?: Date | undefined;
  /** issuance_date is the timestamp when the credit batch was issued. */
  issuanceDate?: Date | undefined;
  /**
   * open tells if it's possible to mint new credits in the future.
   * Once `open` is set to false, it can't be toggled any more.
   */
  open: boolean;
}
export interface BatchProtoMsg {
  typeUrl: "/regen.ecocredit.v1.Batch";
  value: Uint8Array;
}
/** Batch represents the high-level on-chain information for a credit batch. */
export interface BatchAmino {
  /**
   * key is the table row identifier of the credit batch used internally for
   * efficient lookups. This identifier is auto-incrementing.
   */
  key?: string;
  /**
   * issuer is the address that created the batch and which is
   * authorized to mint more credits if open=true.
   */
  issuer?: string;
  /**
   * project_key is the table row identifier of the credit class used internally
   * for efficient lookups. This links a credit batch to a project.
   */
  project_key?: string;
  /**
   * denom is the unique identifier of the credit batch formed from the
   * project id, the batch sequence number, and the start and end date of the
   * credit batch.
   */
  denom?: string;
  /** metadata is any arbitrary metadata attached to the credit batch. */
  metadata?: string;
  /**
   * start_date is the beginning of the period during which this credit batch
   * was quantified and verified.
   */
  start_date?: string | undefined;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  end_date?: string | undefined;
  /** issuance_date is the timestamp when the credit batch was issued. */
  issuance_date?: string | undefined;
  /**
   * open tells if it's possible to mint new credits in the future.
   * Once `open` is set to false, it can't be toggled any more.
   */
  open?: boolean;
}
export interface BatchAminoMsg {
  type: "/regen.ecocredit.v1.Batch";
  value: BatchAmino;
}
/** Batch represents the high-level on-chain information for a credit batch. */
export interface BatchSDKType {
  key: bigint;
  issuer: Uint8Array;
  project_key: bigint;
  denom: string;
  metadata: string;
  start_date?: Date | undefined;
  end_date?: Date | undefined;
  issuance_date?: Date | undefined;
  open: boolean;
}
/**
 * ClassSequence stores and increments the sequence number for credit classes
 * within a credit type.
 */
export interface ClassSequence {
  /**
   * credit_type_abbrev is the credit type abbreviation. This links a class
   * sequence to a credit type.
   */
  creditTypeAbbrev: string;
  /**
   * next_sequence is the next sequence number for a credit class within the
   * credit type. The sequence number is used to generate a class id.
   */
  nextSequence: bigint;
}
export interface ClassSequenceProtoMsg {
  typeUrl: "/regen.ecocredit.v1.ClassSequence";
  value: Uint8Array;
}
/**
 * ClassSequence stores and increments the sequence number for credit classes
 * within a credit type.
 */
export interface ClassSequenceAmino {
  /**
   * credit_type_abbrev is the credit type abbreviation. This links a class
   * sequence to a credit type.
   */
  credit_type_abbrev?: string;
  /**
   * next_sequence is the next sequence number for a credit class within the
   * credit type. The sequence number is used to generate a class id.
   */
  next_sequence?: string;
}
export interface ClassSequenceAminoMsg {
  type: "/regen.ecocredit.v1.ClassSequence";
  value: ClassSequenceAmino;
}
/**
 * ClassSequence stores and increments the sequence number for credit classes
 * within a credit type.
 */
export interface ClassSequenceSDKType {
  credit_type_abbrev: string;
  next_sequence: bigint;
}
/**
 * ProjectSequence stores and increments the sequence number for projects within
 * a credit class.
 */
export interface ProjectSequence {
  /**
   * class_key is the table row identifier of the credit class used internally
   * for efficient lookups. This links a project sequence to a credit class.
   */
  classKey: bigint;
  /**
   * next_sequence is the next sequence number for a project within the credit
   * class. The sequence number is used to generate a project id.
   */
  nextSequence: bigint;
}
export interface ProjectSequenceProtoMsg {
  typeUrl: "/regen.ecocredit.v1.ProjectSequence";
  value: Uint8Array;
}
/**
 * ProjectSequence stores and increments the sequence number for projects within
 * a credit class.
 */
export interface ProjectSequenceAmino {
  /**
   * class_key is the table row identifier of the credit class used internally
   * for efficient lookups. This links a project sequence to a credit class.
   */
  class_key?: string;
  /**
   * next_sequence is the next sequence number for a project within the credit
   * class. The sequence number is used to generate a project id.
   */
  next_sequence?: string;
}
export interface ProjectSequenceAminoMsg {
  type: "/regen.ecocredit.v1.ProjectSequence";
  value: ProjectSequenceAmino;
}
/**
 * ProjectSequence stores and increments the sequence number for projects within
 * a credit class.
 */
export interface ProjectSequenceSDKType {
  class_key: bigint;
  next_sequence: bigint;
}
/**
 * BatchSequence stores and increments the sequence number for credit batches
 * within a project.
 */
export interface BatchSequence {
  /**
   * project_key is the table row identifier of the project used internally for
   * efficient lookups. This links a batch sequence to a project.
   */
  projectKey: bigint;
  /**
   * next_sequence is the next sequence number for a credit batch within the
   * project. The sequence number is used to generate a batch denom.
   */
  nextSequence: bigint;
}
export interface BatchSequenceProtoMsg {
  typeUrl: "/regen.ecocredit.v1.BatchSequence";
  value: Uint8Array;
}
/**
 * BatchSequence stores and increments the sequence number for credit batches
 * within a project.
 */
export interface BatchSequenceAmino {
  /**
   * project_key is the table row identifier of the project used internally for
   * efficient lookups. This links a batch sequence to a project.
   */
  project_key?: string;
  /**
   * next_sequence is the next sequence number for a credit batch within the
   * project. The sequence number is used to generate a batch denom.
   */
  next_sequence?: string;
}
export interface BatchSequenceAminoMsg {
  type: "/regen.ecocredit.v1.BatchSequence";
  value: BatchSequenceAmino;
}
/**
 * BatchSequence stores and increments the sequence number for credit batches
 * within a project.
 */
export interface BatchSequenceSDKType {
  project_key: bigint;
  next_sequence: bigint;
}
/** BatchBalance stores each accounts credit balance. */
export interface BatchBalance {
  /**
   * batch_key is the table row identifier of the credit batch used internally
   * for efficient lookups. This links a batch balance to a credit batch.
   */
  batchKey: bigint;
  /** address is the address of the credit holder. */
  address: Uint8Array;
  /** tradable is the tradable amount of credits. */
  tradable: string;
  /** retired is the retired amount of credits. */
  retired: string;
  /** escrowed is the amount of credits locked up in escrow for the marketplace. */
  escrowed: string;
}
export interface BatchBalanceProtoMsg {
  typeUrl: "/regen.ecocredit.v1.BatchBalance";
  value: Uint8Array;
}
/** BatchBalance stores each accounts credit balance. */
export interface BatchBalanceAmino {
  /**
   * batch_key is the table row identifier of the credit batch used internally
   * for efficient lookups. This links a batch balance to a credit batch.
   */
  batch_key?: string;
  /** address is the address of the credit holder. */
  address?: string;
  /** tradable is the tradable amount of credits. */
  tradable?: string;
  /** retired is the retired amount of credits. */
  retired?: string;
  /** escrowed is the amount of credits locked up in escrow for the marketplace. */
  escrowed?: string;
}
export interface BatchBalanceAminoMsg {
  type: "/regen.ecocredit.v1.BatchBalance";
  value: BatchBalanceAmino;
}
/** BatchBalance stores each accounts credit balance. */
export interface BatchBalanceSDKType {
  batch_key: bigint;
  address: Uint8Array;
  tradable: string;
  retired: string;
  escrowed: string;
}
/** BatchSupply stores the supply of credits for a credit batch. */
export interface BatchSupply {
  /**
   * batch_key is the table row identifier of the credit batch used internally
   * for efficient lookups. This links a batch supply to a credit batch.
   */
  batchKey: bigint;
  /**
   * tradable_amount is the total number of tradable credits in the credit
   * batch. Some of the issued credits may be cancelled and will be removed from
   * tradable_amount and tracked in amount_cancelled. tradable_amount +
   * retired_amount + amount_cancelled will always sum to the original credit
   * issuance amount.
   */
  tradableAmount: string;
  /**
   * retired_amount is the total amount of credits that have been retired from
   * the credit batch.
   */
  retiredAmount: string;
  /**
   * cancelled_amount is the number of credits in the batch that have been
   * cancelled, effectively undoing the issuance. The sum of total_amount and
   * amount_cancelled will always equal the original credit issuance amount.
   */
  cancelledAmount: string;
}
export interface BatchSupplyProtoMsg {
  typeUrl: "/regen.ecocredit.v1.BatchSupply";
  value: Uint8Array;
}
/** BatchSupply stores the supply of credits for a credit batch. */
export interface BatchSupplyAmino {
  /**
   * batch_key is the table row identifier of the credit batch used internally
   * for efficient lookups. This links a batch supply to a credit batch.
   */
  batch_key?: string;
  /**
   * tradable_amount is the total number of tradable credits in the credit
   * batch. Some of the issued credits may be cancelled and will be removed from
   * tradable_amount and tracked in amount_cancelled. tradable_amount +
   * retired_amount + amount_cancelled will always sum to the original credit
   * issuance amount.
   */
  tradable_amount?: string;
  /**
   * retired_amount is the total amount of credits that have been retired from
   * the credit batch.
   */
  retired_amount?: string;
  /**
   * cancelled_amount is the number of credits in the batch that have been
   * cancelled, effectively undoing the issuance. The sum of total_amount and
   * amount_cancelled will always equal the original credit issuance amount.
   */
  cancelled_amount?: string;
}
export interface BatchSupplyAminoMsg {
  type: "/regen.ecocredit.v1.BatchSupply";
  value: BatchSupplyAmino;
}
/** BatchSupply stores the supply of credits for a credit batch. */
export interface BatchSupplySDKType {
  batch_key: bigint;
  tradable_amount: string;
  retired_amount: string;
  cancelled_amount: string;
}
/**
 * BatchOrigTx will index batch mint operations using orig tx ID to handle
 * potential double minting errors
 */
export interface BatchOrigTx {
  /** the id of an originating transaction or opeartion. */
  txId: string;
  /**
   * type of the transaction originating the mint process. Eg: Polygon,
   * Ethereum, Verra...
   */
  typ: string;
  /** reference note for accounting, will be passed to an event */
  note: string;
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;
}
export interface BatchOrigTxProtoMsg {
  typeUrl: "/regen.ecocredit.v1.BatchOrigTx";
  value: Uint8Array;
}
/**
 * BatchOrigTx will index batch mint operations using orig tx ID to handle
 * potential double minting errors
 */
export interface BatchOrigTxAmino {
  /** the id of an originating transaction or opeartion. */
  tx_id?: string;
  /**
   * type of the transaction originating the mint process. Eg: Polygon,
   * Ethereum, Verra...
   */
  typ?: string;
  /** reference note for accounting, will be passed to an event */
  note?: string;
  /** batch_denom is the unique ID of the credit batch. */
  batch_denom?: string;
}
export interface BatchOrigTxAminoMsg {
  type: "/regen.ecocredit.v1.BatchOrigTx";
  value: BatchOrigTxAmino;
}
/**
 * BatchOrigTx will index batch mint operations using orig tx ID to handle
 * potential double minting errors
 */
export interface BatchOrigTxSDKType {
  tx_id: string;
  typ: string;
  note: string;
  batch_denom: string;
}
function createBaseCreditType(): CreditType {
  return {
    abbreviation: "",
    name: "",
    unit: "",
    precision: 0
  };
}
export const CreditType = {
  typeUrl: "/regen.ecocredit.v1.CreditType",
  encode(message: CreditType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.abbreviation !== "") {
      writer.uint32(10).string(message.abbreviation);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.unit !== "") {
      writer.uint32(26).string(message.unit);
    }
    if (message.precision !== 0) {
      writer.uint32(32).uint32(message.precision);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreditType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abbreviation = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.unit = reader.string();
          break;
        case 4:
          message.precision = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreditType {
    return {
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
      name: isSet(object.name) ? String(object.name) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      precision: isSet(object.precision) ? Number(object.precision) : 0
    };
  },
  toJSON(message: CreditType): JsonSafe<CreditType> {
    const obj: any = {};
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    message.name !== undefined && (obj.name = message.name);
    message.unit !== undefined && (obj.unit = message.unit);
    message.precision !== undefined && (obj.precision = Math.round(message.precision));
    return obj;
  },
  fromPartial(object: DeepPartial<CreditType>): CreditType {
    const message = createBaseCreditType();
    message.abbreviation = object.abbreviation ?? "";
    message.name = object.name ?? "";
    message.unit = object.unit ?? "";
    message.precision = object.precision ?? 0;
    return message;
  },
  fromSDK(object: CreditTypeSDKType): CreditType {
    return {
      abbreviation: object?.abbreviation,
      name: object?.name,
      unit: object?.unit,
      precision: object?.precision
    };
  },
  toSDK(message: CreditType): CreditTypeSDKType {
    const obj: any = {};
    obj.abbreviation = message.abbreviation;
    obj.name = message.name;
    obj.unit = message.unit;
    obj.precision = message.precision;
    return obj;
  },
  fromAmino(object: CreditTypeAmino): CreditType {
    const message = createBaseCreditType();
    if (object.abbreviation !== undefined && object.abbreviation !== null) {
      message.abbreviation = object.abbreviation;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = object.unit;
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = object.precision;
    }
    return message;
  },
  toAmino(message: CreditType): CreditTypeAmino {
    const obj: any = {};
    obj.abbreviation = message.abbreviation === "" ? undefined : message.abbreviation;
    obj.name = message.name === "" ? undefined : message.name;
    obj.unit = message.unit === "" ? undefined : message.unit;
    obj.precision = message.precision === 0 ? undefined : message.precision;
    return obj;
  },
  fromAminoMsg(object: CreditTypeAminoMsg): CreditType {
    return CreditType.fromAmino(object.value);
  },
  fromProtoMsg(message: CreditTypeProtoMsg): CreditType {
    return CreditType.decode(message.value);
  },
  toProto(message: CreditType): Uint8Array {
    return CreditType.encode(message).finish();
  },
  toProtoMsg(message: CreditType): CreditTypeProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.CreditType",
      value: CreditType.encode(message).finish()
    };
  }
};
function createBaseClass(): Class {
  return {
    key: BigInt(0),
    id: "",
    admin: new Uint8Array(),
    metadata: "",
    creditTypeAbbrev: ""
  };
}
export const Class = {
  typeUrl: "/regen.ecocredit.v1.Class",
  encode(message: Class, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== BigInt(0)) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.admin.length !== 0) {
      writer.uint32(26).bytes(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.creditTypeAbbrev !== "") {
      writer.uint32(42).string(message.creditTypeAbbrev);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Class {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint64();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.admin = reader.bytes();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.creditTypeAbbrev = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Class {
    return {
      key: isSet(object.key) ? BigInt(object.key.toString()) : BigInt(0),
      id: isSet(object.id) ? String(object.id) : "",
      admin: isSet(object.admin) ? bytesFromBase64(object.admin) : new Uint8Array(),
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : ""
    };
  },
  toJSON(message: Class): JsonSafe<Class> {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || BigInt(0)).toString());
    message.id !== undefined && (obj.id = message.id);
    message.admin !== undefined && (obj.admin = base64FromBytes(message.admin !== undefined ? message.admin : new Uint8Array()));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    return obj;
  },
  fromPartial(object: DeepPartial<Class>): Class {
    const message = createBaseClass();
    message.key = object.key !== undefined && object.key !== null ? BigInt(object.key.toString()) : BigInt(0);
    message.id = object.id ?? "";
    message.admin = object.admin ?? new Uint8Array();
    message.metadata = object.metadata ?? "";
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    return message;
  },
  fromSDK(object: ClassSDKType): Class {
    return {
      key: object?.key,
      id: object?.id,
      admin: object?.admin,
      metadata: object?.metadata,
      creditTypeAbbrev: object?.credit_type_abbrev
    };
  },
  toSDK(message: Class): ClassSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.id = message.id;
    obj.admin = message.admin;
    obj.metadata = message.metadata;
    obj.credit_type_abbrev = message.creditTypeAbbrev;
    return obj;
  },
  fromAmino(object: ClassAmino): Class {
    const message = createBaseClass();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = bytesFromBase64(object.admin);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
      message.creditTypeAbbrev = object.credit_type_abbrev;
    }
    return message;
  },
  toAmino(message: Class): ClassAmino {
    const obj: any = {};
    obj.key = message.key !== BigInt(0) ? message.key.toString() : undefined;
    obj.id = message.id === "" ? undefined : message.id;
    obj.admin = message.admin ? base64FromBytes(message.admin) : undefined;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
    return obj;
  },
  fromAminoMsg(object: ClassAminoMsg): Class {
    return Class.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassProtoMsg): Class {
    return Class.decode(message.value);
  },
  toProto(message: Class): Uint8Array {
    return Class.encode(message).finish();
  },
  toProtoMsg(message: Class): ClassProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.Class",
      value: Class.encode(message).finish()
    };
  }
};
function createBaseClassIssuer(): ClassIssuer {
  return {
    classKey: BigInt(0),
    issuer: new Uint8Array()
  };
}
export const ClassIssuer = {
  typeUrl: "/regen.ecocredit.v1.ClassIssuer",
  encode(message: ClassIssuer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classKey !== BigInt(0)) {
      writer.uint32(8).uint64(message.classKey);
    }
    if (message.issuer.length !== 0) {
      writer.uint32(18).bytes(message.issuer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClassIssuer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassIssuer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classKey = reader.uint64();
          break;
        case 2:
          message.issuer = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClassIssuer {
    return {
      classKey: isSet(object.classKey) ? BigInt(object.classKey.toString()) : BigInt(0),
      issuer: isSet(object.issuer) ? bytesFromBase64(object.issuer) : new Uint8Array()
    };
  },
  toJSON(message: ClassIssuer): JsonSafe<ClassIssuer> {
    const obj: any = {};
    message.classKey !== undefined && (obj.classKey = (message.classKey || BigInt(0)).toString());
    message.issuer !== undefined && (obj.issuer = base64FromBytes(message.issuer !== undefined ? message.issuer : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<ClassIssuer>): ClassIssuer {
    const message = createBaseClassIssuer();
    message.classKey = object.classKey !== undefined && object.classKey !== null ? BigInt(object.classKey.toString()) : BigInt(0);
    message.issuer = object.issuer ?? new Uint8Array();
    return message;
  },
  fromSDK(object: ClassIssuerSDKType): ClassIssuer {
    return {
      classKey: object?.class_key,
      issuer: object?.issuer
    };
  },
  toSDK(message: ClassIssuer): ClassIssuerSDKType {
    const obj: any = {};
    obj.class_key = message.classKey;
    obj.issuer = message.issuer;
    return obj;
  },
  fromAmino(object: ClassIssuerAmino): ClassIssuer {
    const message = createBaseClassIssuer();
    if (object.class_key !== undefined && object.class_key !== null) {
      message.classKey = BigInt(object.class_key);
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = bytesFromBase64(object.issuer);
    }
    return message;
  },
  toAmino(message: ClassIssuer): ClassIssuerAmino {
    const obj: any = {};
    obj.class_key = message.classKey !== BigInt(0) ? message.classKey.toString() : undefined;
    obj.issuer = message.issuer ? base64FromBytes(message.issuer) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClassIssuerAminoMsg): ClassIssuer {
    return ClassIssuer.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassIssuerProtoMsg): ClassIssuer {
    return ClassIssuer.decode(message.value);
  },
  toProto(message: ClassIssuer): Uint8Array {
    return ClassIssuer.encode(message).finish();
  },
  toProtoMsg(message: ClassIssuer): ClassIssuerProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.ClassIssuer",
      value: ClassIssuer.encode(message).finish()
    };
  }
};
function createBaseProject(): Project {
  return {
    key: BigInt(0),
    id: "",
    admin: new Uint8Array(),
    classKey: BigInt(0),
    jurisdiction: "",
    metadata: "",
    referenceId: ""
  };
}
export const Project = {
  typeUrl: "/regen.ecocredit.v1.Project",
  encode(message: Project, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== BigInt(0)) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.admin.length !== 0) {
      writer.uint32(26).bytes(message.admin);
    }
    if (message.classKey !== BigInt(0)) {
      writer.uint32(32).uint64(message.classKey);
    }
    if (message.jurisdiction !== "") {
      writer.uint32(42).string(message.jurisdiction);
    }
    if (message.metadata !== "") {
      writer.uint32(50).string(message.metadata);
    }
    if (message.referenceId !== "") {
      writer.uint32(58).string(message.referenceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Project {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint64();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.admin = reader.bytes();
          break;
        case 4:
          message.classKey = reader.uint64();
          break;
        case 5:
          message.jurisdiction = reader.string();
          break;
        case 6:
          message.metadata = reader.string();
          break;
        case 7:
          message.referenceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Project {
    return {
      key: isSet(object.key) ? BigInt(object.key.toString()) : BigInt(0),
      id: isSet(object.id) ? String(object.id) : "",
      admin: isSet(object.admin) ? bytesFromBase64(object.admin) : new Uint8Array(),
      classKey: isSet(object.classKey) ? BigInt(object.classKey.toString()) : BigInt(0),
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : ""
    };
  },
  toJSON(message: Project): JsonSafe<Project> {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || BigInt(0)).toString());
    message.id !== undefined && (obj.id = message.id);
    message.admin !== undefined && (obj.admin = base64FromBytes(message.admin !== undefined ? message.admin : new Uint8Array()));
    message.classKey !== undefined && (obj.classKey = (message.classKey || BigInt(0)).toString());
    message.jurisdiction !== undefined && (obj.jurisdiction = message.jurisdiction);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    return obj;
  },
  fromPartial(object: DeepPartial<Project>): Project {
    const message = createBaseProject();
    message.key = object.key !== undefined && object.key !== null ? BigInt(object.key.toString()) : BigInt(0);
    message.id = object.id ?? "";
    message.admin = object.admin ?? new Uint8Array();
    message.classKey = object.classKey !== undefined && object.classKey !== null ? BigInt(object.classKey.toString()) : BigInt(0);
    message.jurisdiction = object.jurisdiction ?? "";
    message.metadata = object.metadata ?? "";
    message.referenceId = object.referenceId ?? "";
    return message;
  },
  fromSDK(object: ProjectSDKType): Project {
    return {
      key: object?.key,
      id: object?.id,
      admin: object?.admin,
      classKey: object?.class_key,
      jurisdiction: object?.jurisdiction,
      metadata: object?.metadata,
      referenceId: object?.reference_id
    };
  },
  toSDK(message: Project): ProjectSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.id = message.id;
    obj.admin = message.admin;
    obj.class_key = message.classKey;
    obj.jurisdiction = message.jurisdiction;
    obj.metadata = message.metadata;
    obj.reference_id = message.referenceId;
    return obj;
  },
  fromAmino(object: ProjectAmino): Project {
    const message = createBaseProject();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = bytesFromBase64(object.admin);
    }
    if (object.class_key !== undefined && object.class_key !== null) {
      message.classKey = BigInt(object.class_key);
    }
    if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
      message.jurisdiction = object.jurisdiction;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.reference_id !== undefined && object.reference_id !== null) {
      message.referenceId = object.reference_id;
    }
    return message;
  },
  toAmino(message: Project): ProjectAmino {
    const obj: any = {};
    obj.key = message.key !== BigInt(0) ? message.key.toString() : undefined;
    obj.id = message.id === "" ? undefined : message.id;
    obj.admin = message.admin ? base64FromBytes(message.admin) : undefined;
    obj.class_key = message.classKey !== BigInt(0) ? message.classKey.toString() : undefined;
    obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.reference_id = message.referenceId === "" ? undefined : message.referenceId;
    return obj;
  },
  fromAminoMsg(object: ProjectAminoMsg): Project {
    return Project.fromAmino(object.value);
  },
  fromProtoMsg(message: ProjectProtoMsg): Project {
    return Project.decode(message.value);
  },
  toProto(message: Project): Uint8Array {
    return Project.encode(message).finish();
  },
  toProtoMsg(message: Project): ProjectProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.Project",
      value: Project.encode(message).finish()
    };
  }
};
function createBaseBatch(): Batch {
  return {
    key: BigInt(0),
    issuer: new Uint8Array(),
    projectKey: BigInt(0),
    denom: "",
    metadata: "",
    startDate: undefined,
    endDate: undefined,
    issuanceDate: undefined,
    open: false
  };
}
export const Batch = {
  typeUrl: "/regen.ecocredit.v1.Batch",
  encode(message: Batch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== BigInt(0)) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.issuer.length !== 0) {
      writer.uint32(18).bytes(message.issuer);
    }
    if (message.projectKey !== BigInt(0)) {
      writer.uint32(24).uint64(message.projectKey);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(50).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(58).fork()).ldelim();
    }
    if (message.issuanceDate !== undefined) {
      Timestamp.encode(toTimestamp(message.issuanceDate), writer.uint32(66).fork()).ldelim();
    }
    if (message.open === true) {
      writer.uint32(72).bool(message.open);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Batch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint64();
          break;
        case 2:
          message.issuer = reader.bytes();
          break;
        case 3:
          message.projectKey = reader.uint64();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.metadata = reader.string();
          break;
        case 6:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.issuanceDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.open = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Batch {
    return {
      key: isSet(object.key) ? BigInt(object.key.toString()) : BigInt(0),
      issuer: isSet(object.issuer) ? bytesFromBase64(object.issuer) : new Uint8Array(),
      projectKey: isSet(object.projectKey) ? BigInt(object.projectKey.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      startDate: isSet(object.startDate) ? new Date(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? new Date(object.endDate) : undefined,
      issuanceDate: isSet(object.issuanceDate) ? new Date(object.issuanceDate) : undefined,
      open: isSet(object.open) ? Boolean(object.open) : false
    };
  },
  toJSON(message: Batch): JsonSafe<Batch> {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || BigInt(0)).toString());
    message.issuer !== undefined && (obj.issuer = base64FromBytes(message.issuer !== undefined ? message.issuer : new Uint8Array()));
    message.projectKey !== undefined && (obj.projectKey = (message.projectKey || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
    message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
    message.issuanceDate !== undefined && (obj.issuanceDate = message.issuanceDate.toISOString());
    message.open !== undefined && (obj.open = message.open);
    return obj;
  },
  fromPartial(object: DeepPartial<Batch>): Batch {
    const message = createBaseBatch();
    message.key = object.key !== undefined && object.key !== null ? BigInt(object.key.toString()) : BigInt(0);
    message.issuer = object.issuer ?? new Uint8Array();
    message.projectKey = object.projectKey !== undefined && object.projectKey !== null ? BigInt(object.projectKey.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.metadata = object.metadata ?? "";
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.issuanceDate = object.issuanceDate ?? undefined;
    message.open = object.open ?? false;
    return message;
  },
  fromSDK(object: BatchSDKType): Batch {
    return {
      key: object?.key,
      issuer: object?.issuer,
      projectKey: object?.project_key,
      denom: object?.denom,
      metadata: object?.metadata,
      startDate: object.start_date ?? undefined,
      endDate: object.end_date ?? undefined,
      issuanceDate: object.issuance_date ?? undefined,
      open: object?.open
    };
  },
  toSDK(message: Batch): BatchSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.issuer = message.issuer;
    obj.project_key = message.projectKey;
    obj.denom = message.denom;
    obj.metadata = message.metadata;
    message.startDate !== undefined && (obj.start_date = message.startDate ?? undefined);
    message.endDate !== undefined && (obj.end_date = message.endDate ?? undefined);
    message.issuanceDate !== undefined && (obj.issuance_date = message.issuanceDate ?? undefined);
    obj.open = message.open;
    return obj;
  },
  fromAmino(object: BatchAmino): Batch {
    const message = createBaseBatch();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key);
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = bytesFromBase64(object.issuer);
    }
    if (object.project_key !== undefined && object.project_key !== null) {
      message.projectKey = BigInt(object.project_key);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.start_date !== undefined && object.start_date !== null) {
      message.startDate = fromTimestamp(Timestamp.fromAmino(object.start_date));
    }
    if (object.end_date !== undefined && object.end_date !== null) {
      message.endDate = fromTimestamp(Timestamp.fromAmino(object.end_date));
    }
    if (object.issuance_date !== undefined && object.issuance_date !== null) {
      message.issuanceDate = fromTimestamp(Timestamp.fromAmino(object.issuance_date));
    }
    if (object.open !== undefined && object.open !== null) {
      message.open = object.open;
    }
    return message;
  },
  toAmino(message: Batch): BatchAmino {
    const obj: any = {};
    obj.key = message.key !== BigInt(0) ? message.key.toString() : undefined;
    obj.issuer = message.issuer ? base64FromBytes(message.issuer) : undefined;
    obj.project_key = message.projectKey !== BigInt(0) ? message.projectKey.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.start_date = message.startDate ? Timestamp.toAmino(toTimestamp(message.startDate)) : undefined;
    obj.end_date = message.endDate ? Timestamp.toAmino(toTimestamp(message.endDate)) : undefined;
    obj.issuance_date = message.issuanceDate ? Timestamp.toAmino(toTimestamp(message.issuanceDate)) : undefined;
    obj.open = message.open === false ? undefined : message.open;
    return obj;
  },
  fromAminoMsg(object: BatchAminoMsg): Batch {
    return Batch.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchProtoMsg): Batch {
    return Batch.decode(message.value);
  },
  toProto(message: Batch): Uint8Array {
    return Batch.encode(message).finish();
  },
  toProtoMsg(message: Batch): BatchProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.Batch",
      value: Batch.encode(message).finish()
    };
  }
};
function createBaseClassSequence(): ClassSequence {
  return {
    creditTypeAbbrev: "",
    nextSequence: BigInt(0)
  };
}
export const ClassSequence = {
  typeUrl: "/regen.ecocredit.v1.ClassSequence",
  encode(message: ClassSequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creditTypeAbbrev !== "") {
      writer.uint32(10).string(message.creditTypeAbbrev);
    }
    if (message.nextSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextSequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClassSequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditTypeAbbrev = reader.string();
          break;
        case 2:
          message.nextSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClassSequence {
    return {
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : "",
      nextSequence: isSet(object.nextSequence) ? BigInt(object.nextSequence.toString()) : BigInt(0)
    };
  },
  toJSON(message: ClassSequence): JsonSafe<ClassSequence> {
    const obj: any = {};
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    message.nextSequence !== undefined && (obj.nextSequence = (message.nextSequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ClassSequence>): ClassSequence {
    const message = createBaseClassSequence();
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? BigInt(object.nextSequence.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: ClassSequenceSDKType): ClassSequence {
    return {
      creditTypeAbbrev: object?.credit_type_abbrev,
      nextSequence: object?.next_sequence
    };
  },
  toSDK(message: ClassSequence): ClassSequenceSDKType {
    const obj: any = {};
    obj.credit_type_abbrev = message.creditTypeAbbrev;
    obj.next_sequence = message.nextSequence;
    return obj;
  },
  fromAmino(object: ClassSequenceAmino): ClassSequence {
    const message = createBaseClassSequence();
    if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
      message.creditTypeAbbrev = object.credit_type_abbrev;
    }
    if (object.next_sequence !== undefined && object.next_sequence !== null) {
      message.nextSequence = BigInt(object.next_sequence);
    }
    return message;
  },
  toAmino(message: ClassSequence): ClassSequenceAmino {
    const obj: any = {};
    obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
    obj.next_sequence = message.nextSequence !== BigInt(0) ? message.nextSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ClassSequenceAminoMsg): ClassSequence {
    return ClassSequence.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassSequenceProtoMsg): ClassSequence {
    return ClassSequence.decode(message.value);
  },
  toProto(message: ClassSequence): Uint8Array {
    return ClassSequence.encode(message).finish();
  },
  toProtoMsg(message: ClassSequence): ClassSequenceProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.ClassSequence",
      value: ClassSequence.encode(message).finish()
    };
  }
};
function createBaseProjectSequence(): ProjectSequence {
  return {
    classKey: BigInt(0),
    nextSequence: BigInt(0)
  };
}
export const ProjectSequence = {
  typeUrl: "/regen.ecocredit.v1.ProjectSequence",
  encode(message: ProjectSequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classKey !== BigInt(0)) {
      writer.uint32(8).uint64(message.classKey);
    }
    if (message.nextSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextSequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProjectSequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classKey = reader.uint64();
          break;
        case 2:
          message.nextSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProjectSequence {
    return {
      classKey: isSet(object.classKey) ? BigInt(object.classKey.toString()) : BigInt(0),
      nextSequence: isSet(object.nextSequence) ? BigInt(object.nextSequence.toString()) : BigInt(0)
    };
  },
  toJSON(message: ProjectSequence): JsonSafe<ProjectSequence> {
    const obj: any = {};
    message.classKey !== undefined && (obj.classKey = (message.classKey || BigInt(0)).toString());
    message.nextSequence !== undefined && (obj.nextSequence = (message.nextSequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ProjectSequence>): ProjectSequence {
    const message = createBaseProjectSequence();
    message.classKey = object.classKey !== undefined && object.classKey !== null ? BigInt(object.classKey.toString()) : BigInt(0);
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? BigInt(object.nextSequence.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: ProjectSequenceSDKType): ProjectSequence {
    return {
      classKey: object?.class_key,
      nextSequence: object?.next_sequence
    };
  },
  toSDK(message: ProjectSequence): ProjectSequenceSDKType {
    const obj: any = {};
    obj.class_key = message.classKey;
    obj.next_sequence = message.nextSequence;
    return obj;
  },
  fromAmino(object: ProjectSequenceAmino): ProjectSequence {
    const message = createBaseProjectSequence();
    if (object.class_key !== undefined && object.class_key !== null) {
      message.classKey = BigInt(object.class_key);
    }
    if (object.next_sequence !== undefined && object.next_sequence !== null) {
      message.nextSequence = BigInt(object.next_sequence);
    }
    return message;
  },
  toAmino(message: ProjectSequence): ProjectSequenceAmino {
    const obj: any = {};
    obj.class_key = message.classKey !== BigInt(0) ? message.classKey.toString() : undefined;
    obj.next_sequence = message.nextSequence !== BigInt(0) ? message.nextSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProjectSequenceAminoMsg): ProjectSequence {
    return ProjectSequence.fromAmino(object.value);
  },
  fromProtoMsg(message: ProjectSequenceProtoMsg): ProjectSequence {
    return ProjectSequence.decode(message.value);
  },
  toProto(message: ProjectSequence): Uint8Array {
    return ProjectSequence.encode(message).finish();
  },
  toProtoMsg(message: ProjectSequence): ProjectSequenceProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.ProjectSequence",
      value: ProjectSequence.encode(message).finish()
    };
  }
};
function createBaseBatchSequence(): BatchSequence {
  return {
    projectKey: BigInt(0),
    nextSequence: BigInt(0)
  };
}
export const BatchSequence = {
  typeUrl: "/regen.ecocredit.v1.BatchSequence",
  encode(message: BatchSequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectKey !== BigInt(0)) {
      writer.uint32(8).uint64(message.projectKey);
    }
    if (message.nextSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextSequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchSequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectKey = reader.uint64();
          break;
        case 2:
          message.nextSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchSequence {
    return {
      projectKey: isSet(object.projectKey) ? BigInt(object.projectKey.toString()) : BigInt(0),
      nextSequence: isSet(object.nextSequence) ? BigInt(object.nextSequence.toString()) : BigInt(0)
    };
  },
  toJSON(message: BatchSequence): JsonSafe<BatchSequence> {
    const obj: any = {};
    message.projectKey !== undefined && (obj.projectKey = (message.projectKey || BigInt(0)).toString());
    message.nextSequence !== undefined && (obj.nextSequence = (message.nextSequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<BatchSequence>): BatchSequence {
    const message = createBaseBatchSequence();
    message.projectKey = object.projectKey !== undefined && object.projectKey !== null ? BigInt(object.projectKey.toString()) : BigInt(0);
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? BigInt(object.nextSequence.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: BatchSequenceSDKType): BatchSequence {
    return {
      projectKey: object?.project_key,
      nextSequence: object?.next_sequence
    };
  },
  toSDK(message: BatchSequence): BatchSequenceSDKType {
    const obj: any = {};
    obj.project_key = message.projectKey;
    obj.next_sequence = message.nextSequence;
    return obj;
  },
  fromAmino(object: BatchSequenceAmino): BatchSequence {
    const message = createBaseBatchSequence();
    if (object.project_key !== undefined && object.project_key !== null) {
      message.projectKey = BigInt(object.project_key);
    }
    if (object.next_sequence !== undefined && object.next_sequence !== null) {
      message.nextSequence = BigInt(object.next_sequence);
    }
    return message;
  },
  toAmino(message: BatchSequence): BatchSequenceAmino {
    const obj: any = {};
    obj.project_key = message.projectKey !== BigInt(0) ? message.projectKey.toString() : undefined;
    obj.next_sequence = message.nextSequence !== BigInt(0) ? message.nextSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BatchSequenceAminoMsg): BatchSequence {
    return BatchSequence.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchSequenceProtoMsg): BatchSequence {
    return BatchSequence.decode(message.value);
  },
  toProto(message: BatchSequence): Uint8Array {
    return BatchSequence.encode(message).finish();
  },
  toProtoMsg(message: BatchSequence): BatchSequenceProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.BatchSequence",
      value: BatchSequence.encode(message).finish()
    };
  }
};
function createBaseBatchBalance(): BatchBalance {
  return {
    batchKey: BigInt(0),
    address: new Uint8Array(),
    tradable: "",
    retired: "",
    escrowed: ""
  };
}
export const BatchBalance = {
  typeUrl: "/regen.ecocredit.v1.BatchBalance",
  encode(message: BatchBalance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchKey !== BigInt(0)) {
      writer.uint32(8).uint64(message.batchKey);
    }
    if (message.address.length !== 0) {
      writer.uint32(18).bytes(message.address);
    }
    if (message.tradable !== "") {
      writer.uint32(26).string(message.tradable);
    }
    if (message.retired !== "") {
      writer.uint32(34).string(message.retired);
    }
    if (message.escrowed !== "") {
      writer.uint32(42).string(message.escrowed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchBalance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchKey = reader.uint64();
          break;
        case 2:
          message.address = reader.bytes();
          break;
        case 3:
          message.tradable = reader.string();
          break;
        case 4:
          message.retired = reader.string();
          break;
        case 5:
          message.escrowed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchBalance {
    return {
      batchKey: isSet(object.batchKey) ? BigInt(object.batchKey.toString()) : BigInt(0),
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      tradable: isSet(object.tradable) ? String(object.tradable) : "",
      retired: isSet(object.retired) ? String(object.retired) : "",
      escrowed: isSet(object.escrowed) ? String(object.escrowed) : ""
    };
  },
  toJSON(message: BatchBalance): JsonSafe<BatchBalance> {
    const obj: any = {};
    message.batchKey !== undefined && (obj.batchKey = (message.batchKey || BigInt(0)).toString());
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.tradable !== undefined && (obj.tradable = message.tradable);
    message.retired !== undefined && (obj.retired = message.retired);
    message.escrowed !== undefined && (obj.escrowed = message.escrowed);
    return obj;
  },
  fromPartial(object: DeepPartial<BatchBalance>): BatchBalance {
    const message = createBaseBatchBalance();
    message.batchKey = object.batchKey !== undefined && object.batchKey !== null ? BigInt(object.batchKey.toString()) : BigInt(0);
    message.address = object.address ?? new Uint8Array();
    message.tradable = object.tradable ?? "";
    message.retired = object.retired ?? "";
    message.escrowed = object.escrowed ?? "";
    return message;
  },
  fromSDK(object: BatchBalanceSDKType): BatchBalance {
    return {
      batchKey: object?.batch_key,
      address: object?.address,
      tradable: object?.tradable,
      retired: object?.retired,
      escrowed: object?.escrowed
    };
  },
  toSDK(message: BatchBalance): BatchBalanceSDKType {
    const obj: any = {};
    obj.batch_key = message.batchKey;
    obj.address = message.address;
    obj.tradable = message.tradable;
    obj.retired = message.retired;
    obj.escrowed = message.escrowed;
    return obj;
  },
  fromAmino(object: BatchBalanceAmino): BatchBalance {
    const message = createBaseBatchBalance();
    if (object.batch_key !== undefined && object.batch_key !== null) {
      message.batchKey = BigInt(object.batch_key);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.tradable !== undefined && object.tradable !== null) {
      message.tradable = object.tradable;
    }
    if (object.retired !== undefined && object.retired !== null) {
      message.retired = object.retired;
    }
    if (object.escrowed !== undefined && object.escrowed !== null) {
      message.escrowed = object.escrowed;
    }
    return message;
  },
  toAmino(message: BatchBalance): BatchBalanceAmino {
    const obj: any = {};
    obj.batch_key = message.batchKey !== BigInt(0) ? message.batchKey.toString() : undefined;
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    obj.tradable = message.tradable === "" ? undefined : message.tradable;
    obj.retired = message.retired === "" ? undefined : message.retired;
    obj.escrowed = message.escrowed === "" ? undefined : message.escrowed;
    return obj;
  },
  fromAminoMsg(object: BatchBalanceAminoMsg): BatchBalance {
    return BatchBalance.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchBalanceProtoMsg): BatchBalance {
    return BatchBalance.decode(message.value);
  },
  toProto(message: BatchBalance): Uint8Array {
    return BatchBalance.encode(message).finish();
  },
  toProtoMsg(message: BatchBalance): BatchBalanceProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.BatchBalance",
      value: BatchBalance.encode(message).finish()
    };
  }
};
function createBaseBatchSupply(): BatchSupply {
  return {
    batchKey: BigInt(0),
    tradableAmount: "",
    retiredAmount: "",
    cancelledAmount: ""
  };
}
export const BatchSupply = {
  typeUrl: "/regen.ecocredit.v1.BatchSupply",
  encode(message: BatchSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchKey !== BigInt(0)) {
      writer.uint32(8).uint64(message.batchKey);
    }
    if (message.tradableAmount !== "") {
      writer.uint32(18).string(message.tradableAmount);
    }
    if (message.retiredAmount !== "") {
      writer.uint32(26).string(message.retiredAmount);
    }
    if (message.cancelledAmount !== "") {
      writer.uint32(34).string(message.cancelledAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchSupply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchKey = reader.uint64();
          break;
        case 2:
          message.tradableAmount = reader.string();
          break;
        case 3:
          message.retiredAmount = reader.string();
          break;
        case 4:
          message.cancelledAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchSupply {
    return {
      batchKey: isSet(object.batchKey) ? BigInt(object.batchKey.toString()) : BigInt(0),
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : "",
      cancelledAmount: isSet(object.cancelledAmount) ? String(object.cancelledAmount) : ""
    };
  },
  toJSON(message: BatchSupply): JsonSafe<BatchSupply> {
    const obj: any = {};
    message.batchKey !== undefined && (obj.batchKey = (message.batchKey || BigInt(0)).toString());
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    message.cancelledAmount !== undefined && (obj.cancelledAmount = message.cancelledAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<BatchSupply>): BatchSupply {
    const message = createBaseBatchSupply();
    message.batchKey = object.batchKey !== undefined && object.batchKey !== null ? BigInt(object.batchKey.toString()) : BigInt(0);
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.cancelledAmount = object.cancelledAmount ?? "";
    return message;
  },
  fromSDK(object: BatchSupplySDKType): BatchSupply {
    return {
      batchKey: object?.batch_key,
      tradableAmount: object?.tradable_amount,
      retiredAmount: object?.retired_amount,
      cancelledAmount: object?.cancelled_amount
    };
  },
  toSDK(message: BatchSupply): BatchSupplySDKType {
    const obj: any = {};
    obj.batch_key = message.batchKey;
    obj.tradable_amount = message.tradableAmount;
    obj.retired_amount = message.retiredAmount;
    obj.cancelled_amount = message.cancelledAmount;
    return obj;
  },
  fromAmino(object: BatchSupplyAmino): BatchSupply {
    const message = createBaseBatchSupply();
    if (object.batch_key !== undefined && object.batch_key !== null) {
      message.batchKey = BigInt(object.batch_key);
    }
    if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
      message.tradableAmount = object.tradable_amount;
    }
    if (object.retired_amount !== undefined && object.retired_amount !== null) {
      message.retiredAmount = object.retired_amount;
    }
    if (object.cancelled_amount !== undefined && object.cancelled_amount !== null) {
      message.cancelledAmount = object.cancelled_amount;
    }
    return message;
  },
  toAmino(message: BatchSupply): BatchSupplyAmino {
    const obj: any = {};
    obj.batch_key = message.batchKey !== BigInt(0) ? message.batchKey.toString() : undefined;
    obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
    obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
    obj.cancelled_amount = message.cancelledAmount === "" ? undefined : message.cancelledAmount;
    return obj;
  },
  fromAminoMsg(object: BatchSupplyAminoMsg): BatchSupply {
    return BatchSupply.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchSupplyProtoMsg): BatchSupply {
    return BatchSupply.decode(message.value);
  },
  toProto(message: BatchSupply): Uint8Array {
    return BatchSupply.encode(message).finish();
  },
  toProtoMsg(message: BatchSupply): BatchSupplyProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.BatchSupply",
      value: BatchSupply.encode(message).finish()
    };
  }
};
function createBaseBatchOrigTx(): BatchOrigTx {
  return {
    txId: "",
    typ: "",
    note: "",
    batchDenom: ""
  };
}
export const BatchOrigTx = {
  typeUrl: "/regen.ecocredit.v1.BatchOrigTx",
  encode(message: BatchOrigTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }
    if (message.typ !== "") {
      writer.uint32(18).string(message.typ);
    }
    if (message.note !== "") {
      writer.uint32(26).string(message.note);
    }
    if (message.batchDenom !== "") {
      writer.uint32(34).string(message.batchDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchOrigTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchOrigTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;
        case 2:
          message.typ = reader.string();
          break;
        case 3:
          message.note = reader.string();
          break;
        case 4:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchOrigTx {
    return {
      txId: isSet(object.txId) ? String(object.txId) : "",
      typ: isSet(object.typ) ? String(object.typ) : "",
      note: isSet(object.note) ? String(object.note) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },
  toJSON(message: BatchOrigTx): JsonSafe<BatchOrigTx> {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = message.txId);
    message.typ !== undefined && (obj.typ = message.typ);
    message.note !== undefined && (obj.note = message.note);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<BatchOrigTx>): BatchOrigTx {
    const message = createBaseBatchOrigTx();
    message.txId = object.txId ?? "";
    message.typ = object.typ ?? "";
    message.note = object.note ?? "";
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromSDK(object: BatchOrigTxSDKType): BatchOrigTx {
    return {
      txId: object?.tx_id,
      typ: object?.typ,
      note: object?.note,
      batchDenom: object?.batch_denom
    };
  },
  toSDK(message: BatchOrigTx): BatchOrigTxSDKType {
    const obj: any = {};
    obj.tx_id = message.txId;
    obj.typ = message.typ;
    obj.note = message.note;
    obj.batch_denom = message.batchDenom;
    return obj;
  },
  fromAmino(object: BatchOrigTxAmino): BatchOrigTx {
    const message = createBaseBatchOrigTx();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = object.tx_id;
    }
    if (object.typ !== undefined && object.typ !== null) {
      message.typ = object.typ;
    }
    if (object.note !== undefined && object.note !== null) {
      message.note = object.note;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: BatchOrigTx): BatchOrigTxAmino {
    const obj: any = {};
    obj.tx_id = message.txId === "" ? undefined : message.txId;
    obj.typ = message.typ === "" ? undefined : message.typ;
    obj.note = message.note === "" ? undefined : message.note;
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: BatchOrigTxAminoMsg): BatchOrigTx {
    return BatchOrigTx.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchOrigTxProtoMsg): BatchOrigTx {
    return BatchOrigTx.decode(message.value);
  },
  toProto(message: BatchOrigTx): Uint8Array {
    return BatchOrigTx.encode(message).finish();
  },
  toProtoMsg(message: BatchOrigTx): BatchOrigTxProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.BatchOrigTx",
      value: BatchOrigTx.encode(message).finish()
    };
  }
};