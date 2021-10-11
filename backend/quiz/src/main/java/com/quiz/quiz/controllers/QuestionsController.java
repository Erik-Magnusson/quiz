package com.quiz.quiz.controllers;

import com.quiz.quiz.models.Question;
import com.quiz.quiz.repositories.AnswerRepository;
import com.quiz.quiz.repositories.QuestionRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/questions")
public class QuestionsController {

    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    AnswerRepository answerRepository;

    @GetMapping
    public List<Question> list() {
        return questionRepository.findAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Question get(@PathVariable Long id) {
        return questionRepository.getById(id);
    }

    @PostMapping
    public Question create(@RequestBody final Question question) {
        question.getAnswers()
                .forEach(a -> answerRepository.saveAndFlush(a));
        return questionRepository.saveAndFlush(question);
    }

    @RequestMapping(value="{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        questionRepository.deleteById(id);
    }

    @RequestMapping(value="{id}", method = RequestMethod.PUT)
    public Question update(@PathVariable Long id, @RequestBody Question question) {
        Question existingQuestion = questionRepository.getById(id);
        BeanUtils.copyProperties(question, existingQuestion, "question_id");
        return questionRepository.saveAndFlush(existingQuestion);
    }

}
