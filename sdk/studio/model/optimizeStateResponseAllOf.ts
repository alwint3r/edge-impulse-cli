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

import { OptimizeConfig } from './optimizeConfig';
import { OptimizeStateResponseAllOfStatus } from './optimizeStateResponseAllOfStatus';
import { OptimizeStateResponseAllOfWorkers } from './optimizeStateResponseAllOfWorkers';
import { TunerTrial } from './tunerTrial';

export class OptimizeStateResponseAllOf {
    'config': OptimizeConfig;
    'status': OptimizeStateResponseAllOfStatus;
    'activeTunerJobId'?: number;
    'trials': Array<TunerTrial>;
    'projectDataType'?: OptimizeStateResponseAllOfProjectDataTypeEnum;
    'jobError'?: string;
    'workers': Array<OptimizeStateResponseAllOfWorkers>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "config",
            "baseName": "config",
            "type": "OptimizeConfig"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OptimizeStateResponseAllOfStatus"
        },
        {
            "name": "activeTunerJobId",
            "baseName": "activeTunerJobId",
            "type": "number"
        },
        {
            "name": "trials",
            "baseName": "trials",
            "type": "Array<TunerTrial>"
        },
        {
            "name": "projectDataType",
            "baseName": "projectDataType",
            "type": "OptimizeStateResponseAllOfProjectDataTypeEnum"
        },
        {
            "name": "jobError",
            "baseName": "jobError",
            "type": "string"
        },
        {
            "name": "workers",
            "baseName": "workers",
            "type": "Array<OptimizeStateResponseAllOfWorkers>"
        }    ];

    static getAttributeTypeMap() {
        return OptimizeStateResponseAllOf.attributeTypeMap;
    }
}


export type OptimizeStateResponseAllOfProjectDataTypeEnum = 'audio' | 'image' | 'motion' | 'other';
export const OptimizeStateResponseAllOfProjectDataTypeEnumValues: string[] = ['audio', 'image', 'motion', 'other'];
