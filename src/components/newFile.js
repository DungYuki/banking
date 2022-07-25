export default await (async () => {
const __VLS_Component = (await import('vue')).defineComponent({
setup() {
() => {
// @ts-ignore
[];
// @ts-ignore
[error, login, signIn, signUp];
};
return {};
},

data() {
return {
login: {
username: "",
password: "",
},
error: {
text: "",
status: false,
}
};
},
methods: {
signIn() {
console.log(this.login);
if (this.login.username < 6 || this.login.username > 18) {
this.error = {
text: "Look failed! Username must be 6-18 character.",
status: true,
};
}
}
},
});
const __VLS_slots = (await import('./Login.vue.__VLS_template')).default;
return {} as typeof __VLS_Component & (new () => { $slots: typeof __VLS_slots; });
})();
