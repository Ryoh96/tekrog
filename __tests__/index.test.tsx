/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect'

import { findByRole, findByText, within } from '@testing-library/dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { graphql } from 'msw'
import { setupServer } from 'msw/node'
import { getPage, initTestHelpers } from 'next-page-tester'

import {
  GetAllFixedPageDocument,
  GetAllPathsDocument,
  GetArchivePostsDocument,
  GetCategoriesDocument,
  GetFixedDocument,
  GetPostDocument,
  GetRecentPostsDocument,
  GetTopPagePostsDocument,
} from '@/graphql/generated/request'
import getYearMonth from '@/utils/getYearMonth'

import { data } from '../__mocks__/data/'

const handlers = [
  graphql.query(GetAllFixedPageDocument, (req, res, ctx) => {
    return res(ctx.status(200), ctx.data(data.mockedAllFixedPage))
  }),
  graphql.query(GetAllPathsDocument, (req, res, ctx) => {
    return res(ctx.status(200), ctx.data(data.mockedAllPaths))
  }),
  graphql.query(GetTopPagePostsDocument, (req, res, ctx) => {
    return res(ctx.status(200), ctx.data(data.mockedTopPagePost))
  }),
  graphql.query(GetRecentPostsDocument, (req, res, ctx) => {
    return res(ctx.status(200), ctx.data(data.mockedRecentPosts))
  }),
  graphql.query(GetCategoriesDocument, (req, res, ctx) => {
    return res(ctx.status(200), ctx.data(data.mockedCategories))
  }),
  graphql.query(GetArchivePostsDocument, (req, res, ctx) => {
    return res(ctx.status(200), ctx.data(data.mockedArchivePosts))
  }),
  graphql.query(GetFixedDocument, (req, res, ctx) => {
    return res(ctx.status(200), ctx.data(data.mockedFixed))
  }),
  graphql.query(GetPostDocument, (req, res, ctx) => {
    return res(ctx.status(200), ctx.data(data.mockedPost))
  }),
]

const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => {
  server.close()
})

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Top Page', () => {
  beforeEach(async () => {
    const { page } = await getPage({
      route: '/',
    })

    //@ts-ignore
    render(page)
  })
  it('Should render layout components', async () => {
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(
      screen.getByText('プログラミングの備忘録と情報発信')
    ).toBeInTheDocument()
  })

  it('Should render Recent posts', async () => {
    const recentPosts = data.mockedData.data.recentPost.nodes

    const SideRecentPosts = screen.getByTestId('side-recent-posts')

    //Should render recent posts area
    expect(SideRecentPosts).toBeInTheDocument()

    expect(
      within(SideRecentPosts).getByText(recentPosts[0].title)
    ).toBeInTheDocument()
    expect(
      within(SideRecentPosts).getByText(recentPosts[1].title)
    ).toBeInTheDocument()
  })

  it('Should render Categories', async () => {
    const categories = data.mockedData.data.categories.nodes

    const SideCategories = screen.getByTestId('side-categories')

    //Shoule render categories area
    expect(SideCategories).toBeInTheDocument()
    // console.log(9999,`${categories[1].name}`)

    expect(
      within(SideCategories).getByText(`${categories[0].name}`)
    ).toBeInTheDocument()
    expect(
      within(SideCategories).getByText(`${categories[1].name}`)
    ).toBeInTheDocument()
  })

  it('Should render Archives', async () => {
    const allDates = data.mockedData.data.archivePosts
    //@ts-ignore
    const yearMonth = getYearMonth(allDates)
    const archives = [
      '月を選択',
      ...yearMonth.map((ym) => ym.join('年') + '月'),
    ]

    //Should render archives area
    const SideArchives = screen.getByTestId('side-archives')
    expect(SideArchives).toBeInTheDocument()

    archives.forEach((archive) => {
      const element = within(SideArchives).getByText(archive)
      expect(element).toBeInTheDocument()
    })
  })

  it('Should render main posts', async () => {
    const postData = data.mockedData.data.posts.nodes

    //Should render the main area
    const MainArea = screen.getByTestId('main-area')
    expect(MainArea).toBeInTheDocument()

    postData.forEach((post) => {
      const element = within(MainArea).getByText(post.title)
      expect(element).toBeInTheDocument()
    })
  })

  // it('Should', async () => {
  //   //Should render the main area
  //   const MainArea = screen.getByTestId('main-area')
  //   expect(MainArea).toBeInTheDocument()

  //   const postCards = within(MainArea).getAllByTestId('card')

  //   const postCard = postCards[0]

  //   userEvent.click(postCard)

  //   await screen.findByRole('heading', { level: 1 })
  // })
})
