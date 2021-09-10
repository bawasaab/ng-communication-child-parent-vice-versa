# ng-communication-child-parent-vice-versa

step-1: created an interface for custom datatype.

step-2: created child component (communication-two).

step-3: use that child component in app.component.html template. And passed the data as string.

step-4: on child component received the data send by parent using the input decorator of the angular.

step-5: above said steps are responsible to have an one way component communication i.e parent to child communication.

step-6: now head to the from child to parent communication.

step-7: create a custom event say (changeHost) in the child component using the @Output decorator.

step-8: now use the above said custom event in all those parent components(subscribers) and bind it to parent component methods.
