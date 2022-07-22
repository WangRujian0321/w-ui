<template>
  <div>
    <div>
      <h1>Form校验表单</h1>
      <p>一种带有校验功能的表单</p>
    </div>
    <div style="height:50px"/>
    <div>
      <w_form
          ref="form"
          :model="formdata"
          :rules="rules"
          label-width="80px"
          :inline="true"
      >
        <w_form-item
            label="活动名称"
            prop="name"
        >
          <w_input
              placeholder="请输入活动名称"
              v-model="formdata.name"
              clearable
          ></w_input>
        </w_form-item>

        <w_form-item
            label="活动人数"
            prop="count"
        >
          <w_input-number
              v-model="formdata.count"
              :min="1"
              :max="100"
          ></w_input-number>
        </w_form-item>
        <w_form-item
            label="活动性质"
            prop="type"
        >
          <w_checkbox_group v-model="formdata.type">
            <w_checkbox label="美食餐厅线上活动"></w_checkbox>
            <w_checkbox label="地推活动"></w_checkbox>
            <w_checkbox label="线下主题活动"></w_checkbox>
          </w_checkbox_group>
        </w_form-item>
        <w_form-item
            label="特殊资源"
            prop="resource"
        >
          <w_radio-group v-model="formdata.resource">
            <w_radio
                value="线上品牌商赞助"
                label="线上品牌商赞助"
            ></w_radio>
            <w_radio
                value="线上品牌商赞助"
                label="线下场地免费"
            ></w_radio>
          </w_radio-group>
        </w_form-item>
        <w_form-item
            label="活动形式"
            prop="desc"
        >
          <w_input
              type="textarea"
              v-model="formdata.desc"
              placeholder="请输入活动形式"
          ></w_input>
        </w_form-item>

        <w_form-item>
          <w_button
              type="normal"
              @click="submit"
          >立即创建</w_button>
          <w_button>取消</w_button>
        </w_form-item>

      </w_form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        name: "",
        type: ["线下主题活动"],
        resource: "",
        desc: "",
        count: 1,
        pics: []
      },
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          {
            required: true,
            message: "请至少选择一个活动资源",
            trigger: "change"
          }
        ],
      }
    };
  },
  methods: {
    submit() {
      // 表单校验

      this.$refs.form.validate(valid => {
        if (valid) {
          alert("校验成功");
        } else {
          alert("校验失败");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
