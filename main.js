// The VueJS application entry point that filter `browsedata` acording to the `search` query.
// The `browsedata` is a global variable that is in links.js included in the page before this script.
// The search will be a fuzzy search.
// For example, if you type "sf" it will match "Science Fiction" and "Software"

// the base url for the netflix genre
urlbase = 'https://www.netflix.com/browse/genre/'

// create a VueJS instance
var app = new Vue({
  el: '#app',
  data: {
    search: '',
    browsedata: browsedata
  },
  computed: {
    filteredList() {
      // convert this.search to lowercase inserting .* between each characters
      // for example, if this.search is "sf" it will be converted to "s.*f"
      // this will be used to match the search query with the browsedata
      regexsearch = this.search.toLowerCase().split('').join('.*')
      // return the browsedata that match the regexsearch
      return this.browsedata.filter((item) => {
        return item.category.toLowerCase().match(regexsearch)
      })      
    }
  },
  methods: {
    // tourl convert the code to netflix url
    tourl(code) {
      return urlbase + code
    }
  }
})