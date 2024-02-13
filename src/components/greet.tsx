type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name} you will quickly {props.messageCount} typeScript
        </h2>
      ) : (
        "Welcom guest"
      )}
    </div>
  );
};
