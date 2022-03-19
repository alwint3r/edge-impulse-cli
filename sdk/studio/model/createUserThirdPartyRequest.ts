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


export class CreateUserThirdPartyRequest {
    /**
    * Your name
    */
    'name': string;
    /**
    * Username, minimum 4 and maximum 30 characters. May contain alphanumeric characters, hyphens, underscores and dots. Validated according to `^(?=.{4,30}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._-]+(?<![_.])$`.
    */
    'username': string;
    /**
    * E-mail address. Will need to be validated before the account will become active.
    */
    'email': string;
    /**
    * A project will automatically be created. Sets the name of the first project. If not set, this will be derived from the username.
    */
    'projectName'?: string;
    /**
    * Whether the user accepted the privacy policy
    */
    'privacyPolicy': boolean;
    /**
    * White label domain, if any
    */
    'whitelabel'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "projectName",
            "baseName": "projectName",
            "type": "string"
        },
        {
            "name": "privacyPolicy",
            "baseName": "privacyPolicy",
            "type": "boolean"
        },
        {
            "name": "whitelabel",
            "baseName": "whitelabel",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateUserThirdPartyRequest.attributeTypeMap;
    }
}

