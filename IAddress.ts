export interface Address {
    street?: string;
    city?: string;
    country?: string;
    isLocal?: boolean;
    getAddress?():string;
    setAddress?():void;
}