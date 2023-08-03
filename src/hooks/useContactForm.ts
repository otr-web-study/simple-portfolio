import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import { ADDR } from '@/constants';

export const useContactForm = () => {
  const schema = toTypedSchema(
    object({
      name: string().required('Field required.'),
      email: string().required('Field required.').email('Sorry, invalid format here'),
    }),
  );

  const message = ref('');

  const { handleSubmit } = useForm({ validationSchema: schema });

  const onSubmit = handleSubmit((values) => {
    const params = `?subject=Professional%20issue&body=Name:%20${encodeURIComponent(
      values.name,
    )}%0AEmail:%20${values.email}%0A%0AMessage:%0A${encodeURIComponent(message.value)}`;
    location.href = `mailto:${atob(ADDR)}${params}`;
  });

  return { message, onSubmit };
};
