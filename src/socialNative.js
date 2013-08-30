/* script diagram:
Check: are we on mobile?

if we are on mobile
  find all `ul.social a`s and iterate over them
    if `href` begins with any of {{social network urls}} / alternatively: / if class is any of {{app names}}
      on click
        add a new action on click: goto {{app name}:{uri scheme handler}}
        also
        default link action (fallback for when/if app isn't installed, uri handler fails, etc)


URI Schema Handlers: (waiting until called)

app name: twitter
http link structure: http://twitter.com/{{username}}
uri scheme: twitter://user?screen_name={{username}}

app name: facebook
http link structure: http://facebook.com/{{username}|{user id}|{page name}|{page id} }
uri scheme: ***unknown/unavailable/broken?***

*/