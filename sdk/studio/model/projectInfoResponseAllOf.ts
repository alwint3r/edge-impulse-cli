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

import { DevelopmentKeys } from './developmentKeys';
import { Device } from './device';
import { Download } from './download';
import { Project } from './project';
import { ProjectDataSummary } from './projectDataSummary';
import { ProjectInfoResponseAllOfAcquisitionSettings } from './projectInfoResponseAllOfAcquisitionSettings';
import { ProjectInfoResponseAllOfComputeTime } from './projectInfoResponseAllOfComputeTime';
import { ProjectInfoResponseAllOfDataSummaryPerCategory } from './projectInfoResponseAllOfDataSummaryPerCategory';
import { ProjectInfoResponseAllOfDeploySettings } from './projectInfoResponseAllOfDeploySettings';
import { ProjectInfoResponseAllOfExperiments } from './projectInfoResponseAllOfExperiments';
import { ProjectInfoResponseAllOfImpulse } from './projectInfoResponseAllOfImpulse';
import { ProjectInfoResponseAllOfLatencyDevices } from './projectInfoResponseAllOfLatencyDevices';
import { ProjectInfoResponseAllOfUrls } from './projectInfoResponseAllOfUrls';
import { User } from './user';

export class ProjectInfoResponseAllOf {
    'project': Project;
    'downloads': Array<Download>;
    'developmentKeys': DevelopmentKeys;
    'impulse': ProjectInfoResponseAllOfImpulse;
    'devices': Array<Device>;
    'dataSummary': ProjectDataSummary;
    'dataSummaryPerCategory': ProjectInfoResponseAllOfDataSummaryPerCategory;
    'computeTime': ProjectInfoResponseAllOfComputeTime;
    'acquisitionSettings': ProjectInfoResponseAllOfAcquisitionSettings;
    'collaborators': Array<User>;
    'deploySettings': ProjectInfoResponseAllOfDeploySettings;
    'experiments': ProjectInfoResponseAllOfExperiments;
    'latencyDevices': Array<ProjectInfoResponseAllOfLatencyDevices>;
    /**
    * Evaluation project type
    */
    'evaluationProjectType'?: string;
    'urls': ProjectInfoResponseAllOfUrls;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "project",
            "baseName": "project",
            "type": "Project"
        },
        {
            "name": "downloads",
            "baseName": "downloads",
            "type": "Array<Download>"
        },
        {
            "name": "developmentKeys",
            "baseName": "developmentKeys",
            "type": "DevelopmentKeys"
        },
        {
            "name": "impulse",
            "baseName": "impulse",
            "type": "ProjectInfoResponseAllOfImpulse"
        },
        {
            "name": "devices",
            "baseName": "devices",
            "type": "Array<Device>"
        },
        {
            "name": "dataSummary",
            "baseName": "dataSummary",
            "type": "ProjectDataSummary"
        },
        {
            "name": "dataSummaryPerCategory",
            "baseName": "dataSummaryPerCategory",
            "type": "ProjectInfoResponseAllOfDataSummaryPerCategory"
        },
        {
            "name": "computeTime",
            "baseName": "computeTime",
            "type": "ProjectInfoResponseAllOfComputeTime"
        },
        {
            "name": "acquisitionSettings",
            "baseName": "acquisitionSettings",
            "type": "ProjectInfoResponseAllOfAcquisitionSettings"
        },
        {
            "name": "collaborators",
            "baseName": "collaborators",
            "type": "Array<User>"
        },
        {
            "name": "deploySettings",
            "baseName": "deploySettings",
            "type": "ProjectInfoResponseAllOfDeploySettings"
        },
        {
            "name": "experiments",
            "baseName": "experiments",
            "type": "ProjectInfoResponseAllOfExperiments"
        },
        {
            "name": "latencyDevices",
            "baseName": "latencyDevices",
            "type": "Array<ProjectInfoResponseAllOfLatencyDevices>"
        },
        {
            "name": "evaluationProjectType",
            "baseName": "evaluationProjectType",
            "type": "string"
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "ProjectInfoResponseAllOfUrls"
        }    ];

    static getAttributeTypeMap() {
        return ProjectInfoResponseAllOf.attributeTypeMap;
    }
}

