<template>
  <div class="p-employeesBoard">
    <CardGroup title="Working on">
      <CardList :items="workingOnItems" />
    </CardGroup>

    <CardGroup title="Watching">
      <CardItem class="p-employeesBoard__card-middle" v-bind="watchingItem">
        <div class="p-employeesBoard__card-footer">
          <UiButton variant="primary">Manage projects</UiButton>
          <UiButton>Edit projects</UiButton>
        </div>
      </CardItem>
    </CardGroup>

    <template v-for="(item, index) in comments" :key="index">
      <CardGroup>
        <CardItem v-bind="item">
          <div v-if="item.manageable" class="p-employeesBoard__card-footer">
            <UiButton>Manage projects</UiButton>
          </div>
        </CardItem>
      </CardGroup>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardGroup from './Card/Group.vue'
import CardList from './Card/List.vue'
import CardItem from './Card/Item.vue'
import UiButton from './Ui/Button.vue'

export default defineComponent({
  components: { CardGroup, CardList, CardItem, UiButton },

  data: () => ({
    searchValue: '',

    items: [
      {
        id: 1,
        type: 'story',
        title: 'USER STORY New',
        group: 'scrum-test-2',
        variant: 'success'
      },
      {
        id: 2,
        type: 'story',
        title: 'USER STORY',
        group: 'kanban-test',
        status: 'Ready for test',
        variant: 'warning',
        content:
          'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'
      }
    ],
    workingOn: [1, 2] as Array<number>,
    watching: 2,

    comments: [
      {
        title: 'scrum-test-2',
        variant: 'success',
        content: 'blah',
        stats: {
          likes: 0,
          views: 1,
          followers: 1
        },
        favorite: true
      },
      {
        title: 'scrum-test',
        variant: 'success',
        content: 'testing',
        favorite: true,
        stats: {
          likes: 0,
          views: 1,
          followers: 1
        }
      },
      {
        title: 'kanbban-test',
        variant: 'warning',
        description: 'Description line here',
        favorite: true,
        manageable: true
      }
    ]
  }),
  computed: {
    workingOnItems(): Array<any> {
      return this.workingOn.map(this.getItemById)
    },
    watchingItem(): any {
      return this.getItemById(this.watching)
    }
  },

  methods: {
    getItemById(value: number) {
      return this.items.find(({ id }) => value === id)
    }
  }
})
</script>

<style lang="scss">
@import '../scss/variables.scss';

.p-employeesBoard {
  padding-bottom: 30px;
  display: grid;
  grid-template: '.' / 1fr;
  grid-gap: 20px 15px;
  align-items: start;

  &__card-footer {
    padding-top: 6px;
    display: grid;
    grid-template: '.' / 1fr;
    grid-gap: 16px;
  }

  @media screen and (min-width: 680px) {
    grid-template: '. .' / 1fr 1fr;
  }
  @media screen and (min-width: 980px) {
    grid-template: '. . .' / 1fr 1fr 280px;
  }
  @media screen and (min-width: #{$width-container}) {
    grid-template: '. . .' / 1fr 1fr 304px;
    grid-gap: 20px 48px;

    &__card-middle {
      --side-gap: 45px;
    }
  }
}
</style>
