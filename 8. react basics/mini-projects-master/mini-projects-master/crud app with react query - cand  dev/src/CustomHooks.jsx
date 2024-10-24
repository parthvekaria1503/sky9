import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  createPost,
  deletePostById,
  fetchPostById,
  fetchPosts,
  updatePost,
} from './apis/posts.api'
import { useNavigate } from 'react-router-dom'

export const useFetchPosts = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['post'],
    queryFn: fetchPosts,
  })

  return {
    isLoading,
    isError,
    data,
    error,
  }
}

export const useFetchPostById = (id) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id),
  })

  return {
    isLoading,
    isError,
    data,
    error,
  }
}

export const useDeletePostById = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: deletePostById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post'], exact: true })
    },
  })

  return { mutate }
}

export const useCreatePost = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post'], exact: true })
    },
  })
  return { mutate }
}

export const useUpdatePost = (id) => {
  const navigate = useNavigate()

  const queryClient = useQueryClient()

  const { isLoading, isError, data, error } = useFetchPostById(id)

  const { mutate } = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post'], exact: true })
      navigate('/')
    },
  })

  return { isLoading, isError, data, mutate, error }
}
