<template>
  <div class="ChatField">
    <div class="ChatField__Header">
      <div class="ChatField__UserInfoBox">
        <UserInfoBox :name="name" :isOnline="false" />
      </div>
      <span class="ChatField__UnderLine" />
    </div>
    <CardList class="ChatField__CardList" />
    <TextareaWithButton
      class="ChatField__TextareaWithButton"
      size="medium"
      @updateValue="onSubmit($event)"
    />
    <!-- TODO: データ削除のテストとして配置しているため、不要になったら削除する -->
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
import CardList from "@/components/organisms/CardList/main.vue";
import UserInfoBox from "@/components/molecules/UserInfoBox/main.vue";
import TextareaWithButton from "@/components/molecules/TextareaWithButton/main.vue";
// TODO: データ削除のテストとして配置しているため、不要になったら削除する
import FormButton from "@/components/atoms/FormButton/main.vue";

export default defineComponent({
  components: {
    CardList,
    UserInfoBox,
    TextareaWithButton,
    // TODO: データ削除のテストとして配置しているため、不要になったら削除する
    FormButton,
  },
  setup() {
    const { state, fetchChatList, updateChatList, deleteChatList } = ensureDefined(inject(chatKey));

    onMounted(async () => {
      console.log("ChatField: onMounted");
      fetchChatList();
    });

    const name = "テスト";

    const onSubmit = async ($event: string) => {
      console.log("ChatField: onSubmit");
      if (isEmpty($event)) return;

      updateChatList("masato1999", $event);
    };

    watch(state, () => {
      console.log("ChatField: watch");

      nextTick(() => {
        const contentContainer = document.getElementById("scrollToBottom");
        contentContainer?.scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    return {
      name,
      state,
      onSubmit,
      // TODO: データ削除のテストとして配置しているため、不要になったら削除する
      deleteChatList,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
