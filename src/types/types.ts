export interface Post {
    title: string;
    image: string;
    excerpt: string;
    link: string;
    imgAlt: string;
}

export interface PaginationProps {
    currentPage: number;
    onPageChange: (page: number) => void;
}

export interface APIResponsePost {
    id: number;
    title: string;
    excerpt: string;
    cover: {
        url: string;
        alternativeText: string;
    }
}

export interface APIResponse {
    posts: APIResponsePost[]
}