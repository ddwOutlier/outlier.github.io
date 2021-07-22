$(document).ready(function() {
    $('#btn-minus').click(function(){
        var val = $("#var-value").html();
        val = (val=='1')?val:val-1;
        $("#var-value").html(val);
        $("#product-quanity").val(val);
        return false;
      });
      $('#btn-plus').click(function(){
        var val = $("#var-value").html();
        val++;
        $("#var-value").html(val);
        $("#product-quanity").val(val);
        return false;
      });
      $('.btn-size').click(function(){
        var this_val = $(this).html();
        $("#product-size").val(this_val);
        $(".btn-size").removeClass('btn-secondary');
        $(".btn-size").addClass('btn-success');
        $(this).removeClass('btn-success');
        $(this).addClass('btn-secondary');
        return false;
      });
});

Te=function(t){
  function o(e,n){
    var i;
    return(i=t.call(this,e)||this)
    ._popper=null,i._config=i._getConfig(n),i._menu=i._getMenuElement(),i._inNavbar=i._detectNavbar(),i._addEventListeners(),i
  }
  i(o,t);
  var r=o.prototype;
  return r.toggle=function(){if(!this._element.disabled&&!this._element.classList.contains("disabled")){var t=this._element.classList.contains("show");o.clearMenus(),t||this.show()}},r.show=function(){if(!(this._element.disabled||this._element.classList.contains("disabled")||this._menu.classList.contains("show"))){var t=o.getParentFromElement(this._element),e={relatedTarget:this._element};if(!H.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){if(!this._inNavbar){if(void 0===de)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var n=this._element;"parent"===this._config.reference?n=t:d(this._config.reference)&&(n=this._config.reference,void 0!==this._config.reference.jquery&&(n=this._config.reference[0])),this._popper=fe(n,this._menu,this._getPopperConfig())}var i;if("ontouchstart"in document.documentElement&&!t.closest(".navbar-nav"))(i=[]).concat.apply(i,document.body.children).forEach((function(t){return H.on(t,"mouseover",null,(function(){}))}));this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),H.trigger(t,"shown.bs.dropdown",e)}}},r.hide=function(){if(!this._element.disabled&&!this._element.classList.contains("disabled")&&this._menu.classList.contains("show")){var t=o.getParentFromElement(this._element),e={relatedTarget:this._element};H.trigger(t,"hide.bs.dropdown",e).defaultPrevented||(this._popper&&this._popper.destroy(),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),H.trigger(t,"hidden.bs.dropdown",e))}},r.dispose=function(){t.prototype.dispose.call(this),H.off(this._element,".bs.dropdown"),this._menu=null,this._popper&&(this._popper.destroy(),this._popper=null)},r.update=function(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()},r._addEventListeners=function(){var t=this;H.on(this._element,"click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},r._getConfig=function(t){return t=n({},this.constructor.Default,Y.getDataAttributes(this._element),t),p(he,t,this.constructor.DefaultType),t},r._getMenuElement=function(){return q.next(this._element,".dropdown-menu")[0]},r._getPlacement=function(){var t=this._element.parentNode;if(t.classList.contains("dropend"))return be;if(t.classList.contains("dropstart"))return ye;var e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?me:ge:e?_e:ve},r._detectNavbar=function(){return null!==this._element.closest(".navbar")
}}
