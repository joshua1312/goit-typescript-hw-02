xport interface InittialModalParams {
    modalIsOpen: boolean;
    urlRegular: string;
    imgAlt: string;
    likes: number;
    userName: string;
}

export interface Params {
    query: string;
    page: number;
    per_page: number;
}

export interface Image {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
    description: string;
    user: {
        id: string;
        name: string;
    };
    likes: number;
}
export interface ResponseGetImages {
    results: Image[];
    total: number;
    total_pages: number;
}

export type HandleSearch = (userQuery: string) => void;

export type HandleLoadMore = () => void;

export type HandleModalOpen = (
    urlRegular: string,
    imgAlt: string,
    likes: number,
    userName: string,
) => void;

export type HandleModalClose = () => void;