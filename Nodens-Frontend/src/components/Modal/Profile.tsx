import { BsChevronLeft } from 'react-icons/bs';
import { ProfileT } from '../../types';

const Profile = ({
  profile,
  closeModal,
}: {
  profile: ProfileT | undefined;
  closeModal: any;
}) => {
  return (
    <>
      <button onClick={closeModal}>
        <BsChevronLeft />
      </button>
      <h1 className='text-3xl'>{profile?.Instrumentos[0].Nombre}</h1>
    </>
  )
}

export default Profile