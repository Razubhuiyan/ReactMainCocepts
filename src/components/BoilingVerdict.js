export default function BoilingVerdict(props) {
    return props.celsius >= 100 ? 'The water would boil' : 'The water would not boil';
}
