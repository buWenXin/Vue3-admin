export interface ApisDto {
    tags: Array<tagsDto>,
    paths: [],
    definitions: {},
}


export interface tagsDto {
    name: string,
    model: any;
    children: Array<childrens>,
}


export interface childrens {
    method: string,
    title: string,
    url: string,
    requestDto: any,
    requestDtoString: string,
    responseVo: any,
    responseVoString: string;

}
