# jonogmarteinn.is
Written in React & Next.js. Hosted on Vercel.

## Theme
[Landing Page](https://github.com/BlackrockDigital/startbootstrap-landing-page), a
[Bootstrap v4](https://getbootstrap.com/) theme by
[StartBootstrap](https://startbootstrap.com/themes/landing-page/).

## LiveChat widget for Svörum Strax
At the time of writing we have a demo of a chat widget from 
[Svörum Strax](https://svorumstrax.is). Underneath it is using 
[LiveChat](https://livechat.com). Svörum Strax is a Spanish company staffed by 
Icelanders living in Spain that respond to chat queries between 09:00 - 16:00.

I asked Svörum Strax if the widget required cookie consent and was told it was 
not required. However, after independently looking into the documentation on 
the LiveChat website we will indeed be required to collect prior cookie consent, 
GDPR policy, Privacy Policy, Cookie Policy and maybe Terms of Service.

I proposed to Jón Hafdal that after a trial month if they like the service I 
could set this up in a compliant way. I would load up a chat button like the 
one LiveChat uses in the bottom right hand corner. If clicked it would bring up 
a dialog asking for consent. If given the site would then dynamically load the 
LiveChat widget and bring up the chat window. I would then also add the Privacy 
and Cookie Policy.

The raw HTML setup code we got sent from Svörum Strax:

```html
<!-- Paste the code to your website’s source code before the </body> tag: -->
<!-- Start of LiveChat (www.livechatinc.com) code -->
<script>
    window.__lc = window.__lc || {};
    window.__lc.license = 12638850;
	window.__lc.chat_between_groups = false;
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
</script>
<noscript><a href="https://www.livechatinc.com/chat-with/12638850/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechatinc.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a></noscript>
<!-- End of LiveChat code -->
```