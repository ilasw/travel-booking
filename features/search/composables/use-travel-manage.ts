import type {Travel} from "~/types/travel";
import type {Maybe} from "~/types/utils";
import type {Ref} from "vue";

type UseTravelManage = {
  travel: Ref<Maybe<Travel>>;
};

export const useTravelManage = (props?: UseTravelManage) => {
  const travel = props?.travel ?? ref(null);
  const form = ref(travel);

  const updateTravel = async (changes: Partial<Travel>) => {
    if (!travel?.value) return Promise.reject('Travel not found');

    const updatedTravel = {
      ...travel.value,
      ...changes,
    };

    const data = await $fetch(`/api/travels?travelId=${travel.value.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTravel),
    }).then(() => {
      alert('Travel updated, now reloading the page');
      window.location.reload();
    }).catch(() => {
      alert('Error updating the travel');
    });

    return data;
  };

  const deleteTravel = async () => {
    if (!travel?.value) return Promise.reject('Travel not found');

    await $fetch(`/api/travels?travelId=${travel.value.id}`, {
      method: 'DELETE',
    }).then(() => {
      alert('Travel deleted, now reloading the page');
      window.location.reload();
    }).catch(() => {
      alert('Error deleting the travel');
    });

    return null;
  }

  const createTravel = async (newTravel: Travel) => {
    await $fetch('/api/travels', {
      method: 'POST',
      body: JSON.stringify(newTravel),
    }).then(() => {
      alert('Travel created, now reloading the page');
      window.location.reload();
    }).catch(() => {
      alert('Error creating the travel');
    });
  }

  return {
    form,
    updateTravel,
    deleteTravel,
    createTravel
  };
}