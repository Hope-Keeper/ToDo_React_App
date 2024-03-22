/* eslint-disable spaced-comment */
import { apiSlice } from '../../app/api/apiSlice'
//every api here has the auth header if user login succesfully
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/accounts/login/',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: '/accounts/change-password/',
        method: 'PUT',
        body: { ...data }
      })
    }),
    getWorkspaces: builder.query({
      query: () => ({
        url: '/workspaces/',
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['workspaces']
    }),
    createWorkspace: builder.mutation({
      query: (data) => ({
        url: '/workspaces/',
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    getWorkspace: builder.query({
      query: (id) => ({
        url: `/workspaces/${id}/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['workspaces']
    }),
    updataWorkspace: builder.mutation({
      query: (data) => ({
        url: `workspaces/${data.id}/`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    deleteWorkspace: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.id}/`,
        method: 'Delete'
        //body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    getWorkspaceMembers: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/members/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['workspaces']
    }),
    createWorkspaceMember: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/members/`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    getWorkspaceMember: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/members/${data.id}`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['workspaces']
    }),
    updataWorkspaceMember: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/members/${data.id}`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    deleteWorkspaceMember: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/members/${data.id}`,
        method: 'DELETE'
        // body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    updateWorkspaceSubscription: builder.mutation({
      query: (data) => ({
        url: '/workspaces/subscriptions/copy/',
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['workspaces']
    }),
    /////////////////////////////////////////////////////////
    getProjects: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['projects']
    }),
    createProject: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['projects']
    }),
    getProject: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.id}/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['project']
    }),
    updataProject: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.id}/`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['project']
    }),
    deleteProject: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.id}/`,
        method: 'Delete'
        //body: { ...data }
      }),
      invalidatesTags: ['projects']
    }),
    //////////////////////////////////////////////////////////////
    getBoards: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['boards']
    }),
    createBoard: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['boards']
    }),
    getBoard: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.id}/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['board']
    }),
    updataBoard: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.id}/`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['board']
    }),
    deleteBoard: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.id}/`,
        method: 'Delete'
        //body: { ...data }
      }),
      invalidatesTags: ['boards']
    }),
    /////////////////////////////////////////////////////
    getTasks: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.board_id}/tasks/`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['tasks']
    }),
    createTask: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.board_id}/tasks/`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['tasks']
    }),
    getTask: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.board_id}/tasks/${data.id}`,
        method: 'GET'
        // body: { ...data }
      }),
      providesTags: ['task']
    }),
    updataTask: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.board_id}/tasks/${data.id}`,
        method: 'PATCH',
        body: { ...data }
      }),
      invalidatesTags: ['task']
    }),
    deleteTask: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.board_id}/tasks/${data.id}`,
        method: 'Delete'
        //body: { ...data }
      }),
      invalidatesTags: ['tasks']
    }),
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    getTaskMembers: builder.query({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.board_id}/tasks/${data.id}/assignee/`,
        method: 'GET'
        //body: { ...data }
      }),
      providesTags: ['task']
    }),
    updataTaskMembers: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.board_id}/tasks/${data.id}/assignee/`,
        method: 'POST',
        body: { ...data }
      }),
      invalidatesTags: ['task']
    }),
    deleteTaskMember: builder.mutation({
      query: (data) => ({
        url: `/workspaces/${data.workspace_id}/projects/${data.project_id}/boards/${data.board_id}/tasks/${data.taskID}/assignee/${data.id}/`,
        method: 'Delete'
        // body: { ...data }
      }),
      invalidatesTags: ['task']
    })
  })
})

export const {
  // Login Mutaion
  useLoginMutation,
  // Workspace
  useGetWorkspacesQuery,
  useCreateWorkspaceMutation,
  useUpdataWorkspaceMutation,
  useDeleteWorkspaceMutation,
  useUpdateWorkspaceSubscriptionMutation,
  useUpdataWorkspaceMemberMutation,
  useCreateWorkspaceMemberMutation,
  useGetWorkspaceMembersQuery,
  // Project
  useGetProjectsQuery,
  useCreateProjectMutation,
  useGetProjectQuery,
  useUpdataProjectMutation,
  useDeleteProjectMutation,
  // Boards
  useGetBoardsQuery,
  // Board
  useCreateBoardMutation,
  useGetBoardQuery,
  useUpdataBoardMutation,
  useDeleteBoardMutation,
  // Task
  useCreateTaskMutation,
  useGetTasksQuery,
  useDeleteTaskMutation,
  // Members
  useGetTaskMembersQuery,
  useUpdataTaskMembersMutation,
  useDeleteTaskMemberMutation
} = authApiSlice
