<template>
    <main>
        <div class="number-control my-2">
            <div class="number-left"></div>
            <input type="number" name="number" class="number-quantity" :value="localQuantity" @input="updateQuantity" min="1">
            <div class="number-right"></div>
        </div>
    </main>
</template>

<script>
export default {
    props: {
    quantity: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      localQuantity: this.quantity,
    };
  },
  methods: {
    updateQuantity() {
      this.$emit('update:quantity', this.localQuantity);
    },
  },
}
</script>

<style scoped>
.number-control {
    display: flex;
    align-items: center;
}

.number-left::before,
.number-right::after {
    content: attr(data-content);
    background-color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    width: 20px;
    color: white;
    transition: background-color 0.3s;
    cursor: pointer;
}

.number-left::before {
    content: "-";
}

.number-right::after {
    content: "+";
}

.number-quantity {
    padding: 0.25rem;
    width: 80px;
    height: 26px;
    margin: 0px 5px;
    -moz-appearance: textfield;
    /* border-top: 1px solid black;
    border-bottom: 1px solid black; */
}

.number-left:hover::before,
.number-right:hover::after {
    background-color: #666666;
}
</style>