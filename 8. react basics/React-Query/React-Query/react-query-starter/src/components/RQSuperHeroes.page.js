

export const RQSuperHeroesPage = () => {
  const {isLoading, data} = useQuery('super-heros', ()=> {
    return axios.get('http://localhost:3000/users/');
  }) 
  return <h2>React Query Super Heroes Page</h2>
}
