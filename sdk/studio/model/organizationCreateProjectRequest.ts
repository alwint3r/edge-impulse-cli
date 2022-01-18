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


/**
* If uploadType is set to \'project\', either projectId, newProjectName or both projectApiKey and projectHmacKey are required. projectId and newProjectName are only available through JWT tokens. If uploadType is set to \'dataset\' then outputDatasetName can be set to \'\' to output in the same dataset, or set to a string to create (or append to) a new dataset.
*/
export class OrganizationCreateProjectRequest {
    'name': string;
    'filter'?: string;
    'uploadType'?: OrganizationCreateProjectRequestUploadTypeEnum;
    'projectId'?: number;
    'newProjectName'?: string;
    'projectApiKey'?: string;
    'projectHmacKey'?: string;
    'transformationBlockId'?: number;
    'category'?: OrganizationCreateProjectRequestCategoryEnum;
    'outputDatasetName'?: string;
    'label'?: string;
    'emailRecipientUids'?: Array<number>;
    /**
    * Number of parallel jobs to start
    */
    'transformationParallel'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "string"
        },
        {
            "name": "uploadType",
            "baseName": "uploadType",
            "type": "OrganizationCreateProjectRequestUploadTypeEnum"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "newProjectName",
            "baseName": "newProjectName",
            "type": "string"
        },
        {
            "name": "projectApiKey",
            "baseName": "projectApiKey",
            "type": "string"
        },
        {
            "name": "projectHmacKey",
            "baseName": "projectHmacKey",
            "type": "string"
        },
        {
            "name": "transformationBlockId",
            "baseName": "transformationBlockId",
            "type": "number"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "OrganizationCreateProjectRequestCategoryEnum"
        },
        {
            "name": "outputDatasetName",
            "baseName": "outputDatasetName",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "emailRecipientUids",
            "baseName": "emailRecipientUids",
            "type": "Array<number>"
        },
        {
            "name": "transformationParallel",
            "baseName": "transformationParallel",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return OrganizationCreateProjectRequest.attributeTypeMap;
    }
}


export type OrganizationCreateProjectRequestUploadTypeEnum = 'project' | 'dataset';
export const OrganizationCreateProjectRequestUploadTypeEnumValues: string[] = ['project', 'dataset'];

export type OrganizationCreateProjectRequestCategoryEnum = 'training' | 'testing' | 'split';
export const OrganizationCreateProjectRequestCategoryEnumValues: string[] = ['training', 'testing', 'split'];
