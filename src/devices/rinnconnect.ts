import * as exposes from '../lib/exposes';
import * as tuya from '../lib/tuya';
import type {DefinitionWithExtend} from '../lib/types';

const e = exposes.presets;
const ea = exposes.access;

const definitions: DefinitionWithExtend[] = [
    {
        fingerprint: tuya.fingerprint('TS0601', ['_TZE200_swlgvdlh']),
        model: 'RINN WSCMQ20',
        vendor: 'RINNconnect',
        description: 'RINNconnect Curtain Controller',
        fromZigbee: [tuya.fz.datapoints],
        toZigbee: [tuya.tz.datapoints],
        configure: tuya.configureMagicPacket,
        exposes: [
            e.cover_position().setAccess('position', ea.STATE_SET),
        ],
        meta: {
            tuyaDatapoints: [
                [1, 'state', tuya.valueConverterBasic.lookup({OPEN: tuya.enum(0), STOP: tuya.enum(1), CLOSE: tuya.enum(2)})],
                [2, 'position', tuya.valueConverter.coverPositionInverted],
                [3, 'position', tuya.valueConverter.coverPositionInverted],
            ],
        },
    },
];

export {definitions};