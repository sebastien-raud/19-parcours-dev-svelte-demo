<script context="module">
  import { collaboratorsList, cardsListInit, cardDetails } from '../store';
  import collaboratorsData from '../data/User.json';
  import VirtualCard from '../data/VirtualCard.json';

  export const getCollaborators = async () => {
    // nothing
  }

  export const initCardDetails = () => {
    cardDetails.set({
      number: '0000 0000 0000 0000',
      holder: 'JANE APPLESEED',
      month: '00',
      year: '00',
      cvc: '000'
    });
  }

  export const initLists = () => {
    collaboratorsList.set(collaboratorsData);
    cardsListInit.set(VirtualCard);
    initCardDetails();
  }

  export const formatNumber = (number) => {
    let code = '';
    
    for (let i = 0; i < number.length; i++) {
      if (number[i] != ' ') {
        code += number[i];
      }
    }

    number = code;
    code = '';

    for (let i = 0; i < number.length; i++) {
      if ((i && i % 4 == 0) && number[i] != ' ') {
        code += ' ';
        code += number[i];
      } else {
        code += number[i];
      }
    }
    return code.substring(0, 19);
  }
</script>