<template>
  <div class="ChatField">
    <div class="ChatField__Header">
      <div class="ChatField__UserInfoBox">
        <UserInfoBox :name="name" />
      </div>
      <span class="ChatField__UnderLine" />
    </div>
    <CardList class="ChatField__CardList" />
    <TextareaWithButton class="ChatField__TextareaWithButton" @updateValue="onSubmit($event)" />
    <FormButton class="ChatField__DeleteButton" @click="deleteChatList()">
      全てのデータを削除する
    </FormButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, watch, nextTick } from "@nuxtjs/composition-api";
import { isEmpty } from "lodash";
import { chatKey } from "@/pages/chat/store";
import { ensureDefined } from "@/utils/errors/ensureDefined";
import { scroll } from "@/composable/scroll";
import CardList from "@/components/organisms/CardList/main.vue";
import UserInfoBox from "@/components/molecules/UserInfoBox/main.vue";
import TextareaWithButton from "@/components/molecules/TextareaWithButton/main.vue";
import FormButton from "@/components/atoms/FormButton/main.vue";

export default defineComponent({
  components: {
    CardList,
    UserInfoBox,
    TextareaWithButton,
    FormButton,
  },
  setup() {
    const { state, fetchChatList, updateChatList, deleteChatList } = ensureDefined(inject(chatKey));
    const { scrollToEnd } = scroll();

    onMounted(async () => {
      console.log("ChatField: onMounted");
      fetchChatList();
    });

    const name = "テスト";

    const onSubmit = async ($event: string) => {
      console.log("ChatField: onSubmit");
      if (isEmpty($event)) return;

      updateChatList(state.messageList[0].user.id, $event);
    };

    watch(state, () => {
      console.log("ChatField: watch");

      nextTick(() => {
        scrollToEnd();
      });
    });

    return {
      name,
      state,
      onSubmit,
      deleteChatList,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
