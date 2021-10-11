package com.quiz.quiz.controllers;

import java.io.Serializable;
import java.util.Objects;

public class AnswerId implements Serializable {

    private Long question_id;

    private String answer;

    public AnswerId() {}

    public AnswerId(Long question_id, String answer) {
        this.question_id = question_id;
        this.answer = answer;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AnswerId answerId = (AnswerId) o;
        return Objects.equals(question_id, answerId.question_id) && Objects.equals(answer, answerId.answer);
    }

    @Override
    public int hashCode() {
        return Objects.hash(question_id, answer);
    }
}
