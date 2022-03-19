/**
 * Edge Impulse API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ImpulseDspBlock } from './impulseDspBlock';
import { ImpulseInputBlock } from './impulseInputBlock';

export class DataExplorerSettings {
    /**
    * Preset to use for the data explorer. If you set this to \'custom\' you also need to set the input / dsp blocks. The \"keywords\" and \"images\" preset use an embedding model after the DSP which will yield significantly better results.
    */
    'preset': DataExplorerSettingsPresetEnum;
    'inputBlock'?: ImpulseInputBlock;
    'dspBlock'?: ImpulseDspBlock;
    'dspSettings'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "preset",
            "baseName": "preset",
            "type": "DataExplorerSettingsPresetEnum"
        },
        {
            "name": "inputBlock",
            "baseName": "inputBlock",
            "type": "ImpulseInputBlock"
        },
        {
            "name": "dspBlock",
            "baseName": "dspBlock",
            "type": "ImpulseDspBlock"
        },
        {
            "name": "dspSettings",
            "baseName": "dspSettings",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return DataExplorerSettings.attributeTypeMap;
    }
}


export type DataExplorerSettingsPresetEnum = 'keywords' | 'images' | 'spectral' | 'raw' | 'custom';
export const DataExplorerSettingsPresetEnumValues: string[] = ['keywords', 'images', 'spectral', 'raw', 'custom'];
