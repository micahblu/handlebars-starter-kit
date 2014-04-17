this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};
this["App"]["Templates"]["_navigation"] = this["App"]["Templates"]["_navigation"] || {};

this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};
this["App"]["Templates"]["about"] = this["App"]["Templates"]["about"] || {};

this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};
this["App"]["Templates"]["footer"] = this["App"]["Templates"]["footer"] || {};

this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};
this["App"]["Templates"]["header"] = this["App"]["Templates"]["header"] || {};

this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};
this["App"]["Templates"]["home"] = this["App"]["Templates"]["home"] || {};

this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};
this["App"]["Templates"]["sidebar"] = this["App"]["Templates"]["sidebar"] || {};

Handlebars.registerPartial("navigation", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<nav>\n	<ul>\n		<li>Home</li>\n		<li>About</li>\n	</ul>\n</nav>";
  }));

this["App"]["Templates"]["about"]["template"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["App"]["Templates"]["footer"]["template"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["App"]["Templates"]["header"]["template"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<header>\n	";
  stack1 = self.invokePartial(partials.navigation, 'navigation', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</header>";
  return buffer;
  });

this["App"]["Templates"]["home"]["template"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>Hi ";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>";
  return buffer;
  });

this["App"]["Templates"]["sidebar"]["template"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Sidebar baby</p>";
  });