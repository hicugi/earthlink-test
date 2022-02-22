import Tabs from '../components/Tabs.vue'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    items: { control: { type: 'array' } }
  }
}

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tabs },
  template: `<Tabs v-bind="$props">
    <template #users>
      <div>I'm users</div>
      </template>
    <template #departmens>
      <div>I'm departments</div>
    </template>
  </Tabs>`
})

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      label: 'Users',
      name: 'users'
    },
    {
      label: 'Departmens',
      name: 'departmens'
    }
  ]
}
