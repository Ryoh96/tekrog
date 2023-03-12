import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'RootQuery', categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count?: number | null, name?: string | null, link?: string | null }> } | null };

export type PostPageQueryVariables = Exact<{
  id: Scalars['ID'];
  key: Scalars['String'];
}>;


export type PostPageQuery = { __typename?: 'RootQuery', post?: { __typename?: 'Post', content?: string | null, date?: string | null, title?: string | null, uri?: string | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name?: string | null, uri?: string | null, posts?: { __typename?: 'CategoryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', uri?: string | null, name?: string | null }> } | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null }> } | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | null, nextPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, prevPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, recentPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count?: number | null, name?: string | null, uri?: string | null }> } | null, archivePosts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date?: string | null } }> } | null };

export type RecentPostAndCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentPostAndCategoryQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, link?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count?: number | null, name?: string | null, uri?: string | null }> } | null };

export type TopPagePostsQueryVariables = Exact<{ [key: string]: never; }>;


export type TopPagePostsQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor?: string | null, node: { __typename?: 'Post', title?: string | null, date?: string | null, excerpt?: string | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name?: string | null }> } | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } }> } | null };


export const CategoriesDocument = gql`
    query Categories {
  categories {
    nodes {
      count
      name
      link
    }
  }
}
    `;
export const PostPageDocument = gql`
    query PostPage($id: ID!, $key: String!) {
  post(id: $id) {
    content
    date
    categories {
      nodes {
        name
        uri
        posts(first: 6) {
          nodes {
            title
            categories {
              nodes {
                uri
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
    title
    featuredImage {
      node {
        sourceUrl
      }
    }
    uri
  }
  nextPost: posts(after: $key, first: 1) {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      uri
    }
  }
  prevPost: posts(before: $key, last: 1) {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      uri
    }
  }
  recentPost: posts(first: 5) {
    nodes {
      title
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
  categories {
    nodes {
      count
      name
      uri
    }
  }
  archivePosts: posts(first: 100) {
    edges {
      node {
        date
      }
    }
  }
}
    `;
export const RecentPostAndCategoryDocument = gql`
    query RecentPostAndCategory {
  posts(first: 5) {
    nodes {
      title
      link
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
  categories(first: 30) {
    nodes {
      count
      name
      uri
    }
  }
}
    `;
export const TopPagePostsDocument = gql`
    query TopPagePosts {
  posts {
    edges {
      cursor
      node {
        title
        date
        excerpt
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Categories(variables?: CategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CategoriesQuery>(CategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Categories', 'query');
    },
    PostPage(variables: PostPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PostPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostPageQuery>(PostPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PostPage', 'query');
    },
    RecentPostAndCategory(variables?: RecentPostAndCategoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RecentPostAndCategoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RecentPostAndCategoryQuery>(RecentPostAndCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RecentPostAndCategory', 'query');
    },
    TopPagePosts(variables?: TopPagePostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TopPagePostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TopPagePostsQuery>(TopPagePostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TopPagePosts', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;