import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'RootQuery', categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count?: number | null, name?: string | null, link?: string | null }> } | null };

export type PostPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PostPageQuery = { __typename?: 'RootQuery', post?: { __typename?: 'Post', content?: string | null, date?: string | null, title?: string | null, uri?: string | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name?: string | null, uri?: string | null, posts?: { __typename?: 'CategoryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', uri?: string | null, name?: string | null }> } | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null }> } | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null } | null, nextPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, prevPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, recentPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count?: number | null, name?: string | null, uri?: string | null }> } | null, archivePosts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date?: string | null } }> } | null };

export type RecentPostAndCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentPostAndCategoryQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, link?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count?: number | null, name?: string | null, uri?: string | null }> } | null };

export type TopPageQueryVariables = Exact<{
  last: Scalars['Int'];
  first: Scalars['Int'];
}>;


export type TopPageQuery = { __typename?: 'RootQuery', posts?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, date?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null, categories?: { __typename?: 'PostToCategoryConnection', nodes: Array<{ __typename?: 'Category', name?: string | null, uri?: string | null }> } | null }>, edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', cursor?: string | null }> } | null, recentPost?: { __typename?: 'RootQueryToPostConnection', nodes: Array<{ __typename?: 'Post', title?: string | null, uri?: string | null, excerpt?: string | null, featuredImage?: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl?: string | null } } | null }> } | null, categories?: { __typename?: 'RootQueryToCategoryConnection', nodes: Array<{ __typename?: 'Category', count?: number | null, name?: string | null, uri?: string | null }> } | null, archivePosts?: { __typename?: 'RootQueryToPostConnection', edges: Array<{ __typename?: 'RootQueryToPostConnectionEdge', node: { __typename?: 'Post', date?: string | null } }> } | null };


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
    query PostPage($id: ID!) {
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
  nextPost: posts(after: "YXJyYXljb25uZWN0aW9uOjE4OTI=", first: 1) {
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
  prevPost: posts(before: "YXJyYXljb25uZWN0aW9uOjE4OTI=", last: 1) {
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
  categories(first: 30) {
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
export const TopPageDocument = gql`
    query TopPage($last: Int!, $first: Int!) {
  posts(first: $first, last: $last) {
    nodes {
      title
      uri
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      excerpt
      categories {
        nodes {
          name
          uri
        }
      }
    }
    edges {
      cursor
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
      excerpt
    }
  }
  categories(first: 30) {
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
    TopPage(variables: TopPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TopPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TopPageQuery>(TopPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TopPage', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;