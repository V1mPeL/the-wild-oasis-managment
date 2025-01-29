import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Setting successfully edited');
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, editCabin };
}
