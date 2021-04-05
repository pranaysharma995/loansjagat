import axios from '../axios-auth'
import Header from './Navigation/Header.vue'
import Footer from './Navigation/Footer.vue'

export default {
  components: {
		appFooter: Footer,
		appHeader: Header
	},
	data(){
		return{
			data : '',
			response_html_data:'',
			page_title:'',
			bredcrumb : '',
			form_name:'',
			is_form:false
		}
	},
  created() {

    this.getData(this.$router.history.current.params.id);
  },
  
  methods: {
	  getData(id){
		axios.get('page/'+id).then((response1)=>{
				 this.data = response1.data[0]
				// document.title = response1.data[0].page_title;
				 this.form_name = response1.data[0].name
				 this.bredcrumb = response1.data[0].url
				 if(response1.data[0].include_form!=null){
					 this.is_form = true
				 }
				 this.page_title = response1.data[0].page_title
				 this.response_html_data = response1.data[0].about_page
			}).catch((err)=>{
			console.log(err)
			});
	  }
  },
  metaInfo() {
	return { 
		title: `${this.data.page_title}`,
		meta: [
			{ name: 'description', content:  this.data.meta_desc},
			{ property: 'og:title', content: this.data.page_title}
		]
	}
},
}
