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


export class OrganizationTransformationBlock {
    'id': number;
    'name': string;
    'dockerContainer': string;
    'dockerContainerManagedByEdgeImpulse': boolean;
    'created': Date;
    'userId'?: number;
    'userName'?: string;
    'description': string;
    /**
    * These arguments are passed into the container
    */
    'cliArguments': string;
    'indMetadata': boolean;
    'requestsCpu'?: number;
    'requestsMemory'?: number;
    'limitsCpu'?: number;
    'limitsMemory'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "dockerContainer",
            "baseName": "dockerContainer",
            "type": "string"
        },
        {
            "name": "dockerContainerManagedByEdgeImpulse",
            "baseName": "dockerContainerManagedByEdgeImpulse",
            "type": "boolean"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number"
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "cliArguments",
            "baseName": "cliArguments",
            "type": "string"
        },
        {
            "name": "indMetadata",
            "baseName": "indMetadata",
            "type": "boolean"
        },
        {
            "name": "requestsCpu",
            "baseName": "requestsCpu",
            "type": "number"
        },
        {
            "name": "requestsMemory",
            "baseName": "requestsMemory",
            "type": "number"
        },
        {
            "name": "limitsCpu",
            "baseName": "limitsCpu",
            "type": "number"
        },
        {
            "name": "limitsMemory",
            "baseName": "limitsMemory",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return OrganizationTransformationBlock.attributeTypeMap;
    }
}

