import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MusicianT } from '../../types';
import { clientHttp } from '../../services/client';
import { renewToken } from '../../services';
import { Loading } from '../../components';

const SingleMusician = () => {
  const {id} = useParams();
  const [musician, setMusuician] = useState<MusicianT>();

  const getMusician = async () => {
    await renewToken();
    clientHttp().get('')   
  }

  useEffect(()=> {
    getMusician()
  }, [])
  if(!musician) return <Loading />
  return (
    <div>SingleMusician</div>
  )
}

export default SingleMusician