export const demoMixin = {
  data() {
    return {
      message: "mixin消息"
    }
  },
  methods: {
    foo() {
      console.log("----------mixin foo---------", new Date().getTime())
    }
  },
  created() {
    console.log("----------mixin created------------", new Date().getTime())
  }
}